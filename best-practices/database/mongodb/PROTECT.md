# MongoDB

### Protect your MongoDB

1.  Lock down access to your MongoDB instance's port 27017  
     _(reference: [guide](https://medium.com/@matteocontrini/how-to-setup-auth-in-mongodb-3-0-properly-86b60aeef7e8#.2tbt9or6y))_  
     \* _27017 is MongoDB's default listening port and as such is most vulnerable to attacks._

    - In your ec2 instance command line, enter the following:

      - _If you are using the same instance for both DB and API, you can skip this step as your MongoDB instance is already locked down_

      > sudo ufw allow from your_api_server_ip/32 to any port 27017

      to lock down that port to only listen to the ip address of your API instance.

      - To make sure it worked, enter:

        > sudo ufw status

2.  Secure MongoDB's admin DB

    - Open your Mongo shell by running

      > sudo mongo

    - Switch to the admin database

      > use admin

    - Create an 'admin' user

      - _(for consistency, please name the user admin, but change the password to a randomly generated 30-50 character string. **Make sure you keep that password string!**)_

      > db.createUser({ user: "admin", pwd: "adminpassword", roles: [{ role: "userAdminAnyDatabase", db: "admin" }] })

    - To check that it worked and to log yourself into the admin database in your MongoDB, enter

      > db.auth("admin", "adminpassword")

      _Please note: 1. Obviously you should change "adminpassword" to your actual password 2. This command will be your log-in every time you first enter MongoDB_

    - Exit the MongoDB shell (run _exit_), and open your mongod.conf file with vim

      > sudo vim /etc/mongod.conf

    - In order to require authorization to access your database, scroll to the **security** section, and add the following:

      > authorization: enabled

      - Save the file (**esc** > **:wq** > **enter**). It should look like this:  
         ![](../../../media/mongoconf.png)

    - Now you'll need to restart your MongoDB instance to have the changes take effect. Do so by:

      > sudo systemctl restart mongodb

      - To check that it worked, run:

        > sudo systemctl status mongodb

        should return something similar to:  
         ![](../../../media/mongostatus.png)

3.  Secure your project DB (if different from admin)
    _If you only have 1 database in MongoDB and it is the admin database, skip this step_

    - Log into MongoDB shell and switch to your admin db (run use admin)

    - Authenticate your user with

      > db.auth("admin", "adminpassword")

    - Now switch to your database and create a user:  
       _Name your db something that makes sense (name of the client, project, etc.) and always use a different password from admin  
       We password protect the admin db **and** the individual db for extra security_

      > use yourdatabase

          db.createUser({ user: "youruser", pwd: "yourpassword", roles: [{ role: "dbOwner", db: "yourdatabase" }] })

    - Authorize yourself with your new user, and try to list your collections to make sure it worked:

      > db.auth("youruser", "yourpassword")

          show collections

    - If your collections show up, your MongoDB is secure. If you want to double-check, exit the shell and log back in, then attempt to show collections in your db.

4.  Change your bindIp

    - Exit the MongoDB shell and open your mongod.conf file again

      > sudo vim /etc/mongod.conf

    - Find the **net** designation, and change your bindIp from 127.0.0.1 to 0.0.0.0

      \*It should look like this:  
       ![](../../../media/netsettings.png)

5.  Change your connection string

    - Wherever you have your connection string set up, change the string to this format:

      > mongodb://youruser:yourpassword@mongodb-ec2-ip-address:27017/yourdatabase

    - ##A few notes:

      - Make sure your .env files, config.js files, and all password-holding files are _not_ checked in the git.

      - If you forgot to add these to the .gitignore file, you can have git stop tracking them by running

        - **MAKE SURE** you have a copy of the file **BEFORE** you run this command!!!

        > git rm --cached -r name-of-file-you-want-to-stop-tracking

        - You'll need to change any passwords or config info that you had in the file because this will not delete these files from GitHub's history.

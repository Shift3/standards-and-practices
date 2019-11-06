# MongoDB

### Install MongoDB

1. SSH into your ec2 instance using the pem key you designated when you created the instance
2. Install MongoDB on your instance (ref: [guide](https://www.digitalocean.com/community/tutorials/how-to-install-mongodb-on-ubuntu-16-04).)
    * In the instance, run 
        >  sudo apt-key adv --keyserver hkp://keyserver.ubuntu.com:80 --recv EA312927

    * The console should print out
        > gpg: Total number processed: 1
        > 
        > gpg:               imported: 1  (RSA: 1)    

    * Add a list file for the instance's *apt* will know where to download the MongoDB details:
        >  echo "deb http://repo.mongodb.org/apt/ubuntu xenial/mongodb-org/3.2 multiverse" | sudo tee /etc/apt/sources.list.d/mongodb-org-3.2.list

    * Now update the instance's packages: 

        >  sudo apt-get update

    * The instance is ready to download MongoDB. To do so, issue the following command: 

        >  sudo apt-get install -y mongodb-org

3. Now you need to configure the instance to run MongoDB most efficiently

    * Using vim, create a unit file to manage your MongoDB Services (sudo service...)

        >  sudo vim /etc/systemd/system/mongodb.service

        * The file will be empty. Paste the following and save the file (**esc** > **:wq** > **enter**)

             > [Unit]  
                Description=High-performance, schema-free document-oriented database  
                After=network.target  
             > 
             > [Service]  
                User=mongodb  
                ExecStart=/usr/bin/mongod --quiet --config /etc/mongod.conf
             > 
             > [Install]  
                WantedBy=multi-user.target
        
    * Issue the command to your newly created service

        >  sudo systemctl start mongodb
    
    * Now check that the MongoDB is running 

        >  sudo systemctl status mongodb

        * The output will look like this: 

            > ● mongodb.service - High-performance, schema-free document-oriented database  
                Loaded: loaded (/etc/systemd/system/mongodb.service; enabled; vendor preset: enabled)  
                Active: active (running) since Mon 2016-04-25 14:57:20 EDT; 1min 30s ago  
                Main PID: 4093 (mongod)  
                    Tasks: 16 (limit: 512)  
                Memory: 47.1M  
                    CPU: 1.224s  
                CGroup: /system.slice/mongodb.service  
                        └─4093 /usr/bin/mongod --quiet --config /etc/mongod.conf 

    * Run this command to auto-start MongoDB when system starts: 

        >  sudo systemctl enable mongodb

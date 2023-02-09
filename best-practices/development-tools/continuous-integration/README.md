# Continous Integration

## What service do we use?

[CircleCI](http://circleci.com)

It provides the least barrier to entry to get it up and running, since it’s on the cloud and not self-hosted like TeamCity or Jenkins. It also has the cheapest plans if we decided to upgrade from the Free Tier.

## How do I access it?

- Go to [CircleCI](http://circleci.com).
- Sign up using your GitHub credentials (this will allow Circle CI to see all of your projects).
- Select the project that you want to add Circle CI to (You can change GitHub Organizations on the top left). If you don't own the project, it will ask you to contact the person who does.
- Select the settings based on your project and an example CircleCI configuration will be generated for you.
- Save that under `repo/.circleci/config.yml`.
- Make a git push to your GitHub repo and CircleCI will trigger and process your configuration file.

### Configuration

CircleCI allows us to provide a `yml` configuration file that will do all of the work for us. It needs to be present in the following directory:

`repo/.circleci/config.yml`

You can grab an example config from [here](circle_ci_config.yml) or the CircleCI dashboard will generate one for you when setting up your project. Just change the values of the following (if needed):

- `build.docker.image`: Change this to the image that you need to build your project. If you're using an AWS ECR image, you can pull it in as well. [Docs](https://circleci.com/blog/aws-ecr-auth-support/)
- `build.image.steps`: Change the steps to fit your project needs. Read below for information about caching dependencies.
- `deploy.run`: Change this if deploying to something other than `Elastic Beanstalk`

The majority of the terms in the config are tool agnostic and pretty straightforward. However there two things that need more information.

#### Sharing data between jobs

If your job creates an object that you want to share with any subsequent jobs (docker image, executable file, minimized file, etc), you can have CircleCI store it for you for the duration of the build.
[Share data among jobs](https://circleci.com/docs/2.0/workflows#using-workspaces-to-share-data-among-jobs).

Just uncomment the `persist_to_workspace` and `attach_to_workspace` sections and make sure to copy your files into the directory that you specify.

#### Caching dependencies

Since the build will running on every commit, one thing we want to avoid is installing dependencies every single time.

The steps `save_cache` and `restore_cache` aim to mitigate that.

CircleCI allows us to permanently save specific files in an internal cache. We specify this by providing a `path` to save and a `key` to save it under:

```
- save_cache:
          paths:
            - node_modules
          key: v1-dependencies-{{ checksum "package.json" }}
```

This saves the `node_modules` directory under the name created by concatenating the string `v1-dependencies-` and the checksum of `package.json`. If the key already exists, CircleCI will skip the step.

This pattern works because whenever the contents of `package.json` changes, the checksum will be different and the concatenated key will not exist.

Now that CircleCI has a cached directory of our dependencies, we can tell it to insert it back into our checked out directory with the `restore_cache` step.

```
steps:
      - checkout

      # Download and cache dependencies
      - restore_cache:
          keys:
          - v1-dependencies-{{ checksum "package.json" }}
          # fallback to using the latest cache if no exact match is found
          - v1-dependencies-

      - run: npm install

      - save_cache:
          paths:
            - node_modules
          key: v1-dependencies-{{ checksum "package.json" }}

```

What it does is that it attempts to bring back the cache for the existing `package.json`. If none exists, then `npm install` will download everything. If it does, then no packages are installed.

We then proceed to run the `save_cache` step for whenever our `package.json` does change.

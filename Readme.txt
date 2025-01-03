This file will have the steps to be followed.

1) Please load the dataset onto dbfs. File -> Upload data to dbfs.

2) Please edit code cell 9,21, 23, 62(line 5), 63(line 5) with the location where your placing the dataset.(Please Note: Editing cell 21,23,2,63 is not mandatory sometimes it might run without editing as my shared path is set as public and anyone can access)

3) Please note that total runtime of the whole file is around 15 minutes. Plan accordingly before running the file.

4) For Tableau please open link -> https://public.tableau.com/app/profile/jason.rayen/viz/FinalProject-EDA-FifaPlayersDataset/FinalDashboard?publish=yes


The below steps are for running the NoSQL code.
5) for NoSQL, setup MongoDB in your system. Here are the steps to setup MongoDB.

Create an account on MongoDB Atlas - https://www.mongodb.com/products/tools/atlas-cli. After that, create a cluster in Atlas 

Next, after logging into the account, create a database. 

Next go to the homepage, click on Security, and create a username and password.

Next, go to Network Access and click "Allow Access From Anywhere."

Now go to Databases and check if the cluster is created. Click on the Connect option. choose the shell option to connect.

After that, you will get two options: one, "I don't have MongoDB installed on the shell," and the other, "I have installed." Go with one. It will provide 2-3 commands to install. But that alone doesn't work; you have to set up Homebrew on your system from the terminal.

Open the terminal:

If there is a software update in your system, update your system before installing.

Next, install Homebrew (package manager):
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
brew install mongosh

next steps- Refer to this link for the remaining steps: https://www.mongodb.com/docs/mongodb-shell/install/ and follow the steps. we should also need to download a few packages from here: https://www.mongodb.com/try/download/shell. After downloading, run the scripts available in the 'bin' folder of the downloaded packages on your system.

After successful installation, check the version. just to make sure that mongosh is installed:
mongosh --version

Run your connection string in your command line. Use this connection string in your application:
mongosh "mongodb+srv://cluster0.r60xqsl.mongodb.net/" --apiVersion 1 --username dhavaniavu (this is mine)

You will find it in Atlas -> Database -> Connect -> Shell. Select this option: "I have MongoDB installed." Copy the command, run it in the terminal, and run show dbs. If it shows default databases, your MongoDB is successfully connected. Make sure to close and reopen the terminal before running the following command.

Import your CSV file to the terminal. Please note that we used finalplayers_NoSql.csv file.

For uploading, you can get the command in Atlas -> Home Overview page -> Scroll down -> Select the option "Add Data Options" -> Go to Import File on the screen -> Import via command line. Now you will have import and export commands; use the import command.

My Sample command:
mongoimport --uri "mongodb+srv://dhavaniavu:Dhavani.99@cluster0.r60xqsl.mongodb.net/FIFA" --collection "FIFAWC" --type csv --file /Users/dhavani/Downloads/finalfifaplayers.csv --headerline

By default, there are a few fields that should be replaced with your desired names. It's better to name them as your database and collection name so that you can run the queries as is.

Now start MongoDB again. Get your command from Atlas:
mongosh "mongodb+srv://cluster0.r60xqsl.mongodb.net/" --apiVersion 1 --username dhavaniavu

Enter-
show dbs

If FIFA database is there, enter:
use FIFA

Now proceed with the queries that are written in NoSql.js file, copy one query after the other and then run it in terminal. 


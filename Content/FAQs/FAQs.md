- [Common problems](#common-problems)
  - [Initiation](#initiation)
    - [Question 1: Arrrrrgh](#question-1-arrrrrgh)
    - [Question 2: The Black Pearl](#question-2-the-black-pearl)
    - [Question 3: The Flying Dutchman](#question-3-the-flying-dutchman)
    - [Question 4: Operation Blackbeard](#question-4-operation-blackbeard)
- [GitHub Actions in the wild](Content/Git/Git.md#github-actions-in-the-wild)

## **Common problems**

Here are a few examples of common problems you might face when working with Linux, along with some possible solutions in a pirate theme:

1. **The Ship Be Sinking!:** Ye be working on yer code, when all of a sudden ye see a message saying "out of memory." This be a problem because yer ship doesn't have enough memory to run all the programs ye be trying to use. To fix this problem, ye can try closing some programs or processes that be using a lot of memory, or ye can try adding more memory to yer ship.

2. **The Ship Be Adrift!:** Ye be trying to run a program, but ye keep getting a message saying "command not found." This be a problem because yer ship doesn't know where to find the program ye be trying to run. To fix this problem, ye can try using the which command to see where the program be installed, or ye can try adding the directory where the program be installed to yer PATH environment variable.

3. **The Ship Be Under Attack!:** Ye be working on yer code, when all of a sudden ye see a message saying "permission denied." This be a problem because yer ship be trying to access a file or directory that ye don't have permission to access. To fix this problem, ye can try using the chmod command to change the permissions on the file or directory, or ye can try using the sudo command to run the program as the superuser.

4. **The Ship Be Taking on Water!:** Ye be working on yer code, when all of a sudden ye see a message saying "disk full." This be a problem because yer ship's hard drive be full and ye don't have any more space to store yer files. To fix this problem, ye can try deleting some files that ye don't need anymore, or ye can try adding a new hard drive to yer ship.

I hope these examples give ye an idea of some common problems ye might face when working with Linux, and how ye might go about solving them.

### **Initiation**

Ye be now ready to begin yer journey as a Linux pirate! Ye can start by reading the rest of this book, or ye can try some of the challenges below.

### **Question 1: Arrrrrgh**

**Question:**

You are the captain of a pirate ship and have just captured a merchant vessel. The merchant vessel's captain has agreed to hand over all of their valuable cargo in exchange for safe passage back to port. However, before the transfer can take place, you need to ensure that the merchant vessel's computers and servers are secure.

As the resident Linux expert on your pirate ship, you have been tasked with setting up a secure firewall on the merchant vessel's servers.

Using only the command line, complete the following tasks:

1. Create a new firewall rule that allows incoming traffic on port `80` (HTTP) and port `443` (HTTPS) from the IP address of your pirate ship, and blocks all other incoming traffic.

2. Set up a new user account for the merchant vessel's captain with the username `captain` and the password `treasure`. The captain should have sudo privileges.

3. Set up a cron job that runs every hour and checks for updates to the system's package manager. If updates are available, the cron job should automatically install them.

**Answer:**

To create a new firewall rule that allows incoming traffic on port `80` and port `443` from the IP address of your pirate ship and blocks all other incoming traffic, you can use the `ufw` utility. First, run the following command to enable the firewall:

```bash
sudo ufw enable
```

Then, run the following command to allow incoming traffic on port `80` and port `443` from your pirate ship's IP address:

```bash
sudo ufw allow from <pirate ship IP address> to any port 80,443
```

Finally, run the following command to block all other incoming traffic:

```bash
sudo ufw default deny incoming
```

To set up a new user account for the merchant vessel's captain with the username `captain` and the password `treasure`, and grant them sudo privileges, you can use the useradd and usermod commands. First, run the following command to create the new user account:

```bash
sudo useradd -m -s /bin/bash captain
```

This will create a new user account with the username `captain` and a home directory at `/home/captain`. Next, run the following command to set the password for the `captain` user:

```bash
sudo passwd captain
```

Enter `treasure` as the password when prompted. Finally, run the following command to grant the `captain` user sudo privileges:

```bash
sudo usermod -aG sudo captain
```

To set up a cron job that runs every hour and checks for updates to the system's package manager, you can use the crontab command. First, open the crontab editor for the root user by running the following command:

```bash
sudo crontab -e
```

Then, add the following line to the end of the file:

```bash
0 * * * * apt-get update && apt-get upgrade -y
```

This will run the `apt-get update` and `apt-get upgrade -y` commands every hour. The `apt-get update` command checks for updates to the package manager, and the `apt-get upgrade -y` command installs any available updates.

### **Question 2: The Black Pearl**

**Question:**

You are the captain of a pirate ship and have just captured a merchant vessel. The merchant vessel's captain has agreed to hand over all of their valuable cargo in exchange for safe passage back to port. However, before the transfer can take place, you need to ensure that the merchant vessel's computers and servers are secure.

As the resident Linux expert on your pirate ship, you have been tasked with setting up a secure backup system for the merchant vessel's servers.

Using only the command line, complete the following tasks:

1. Install and configure the rsync utility on the merchant vessel's servers.
2. Set up a script that runs daily and creates a full system backup of the merchant vessel's servers. The script should exclude certain directories (e.g. `/tmp`, `/var/log`) and compress the backup using `gzip`.
3. Set up a remote server on your pirate ship to store the backups. The remote server should use SSH for secure communication.
4. Modify the daily backup script to transfer the backups to the remote server using rsync over SSH.

**Answer:**

To install and configure the rsync utility on the merchant vessel's servers, you can use the apt-get command. First, update the package manager's list of available packages by running the following command:

```bash
sudo apt-get update
```

Then, install rsync by running the following command:

```bash
sudo apt-get install rsync -y
```

Once rsync is installed, you can configure it by editing the `/etc/rsync.conf` file. You can use a text editor like `nano` to do this:

```bash
sudo nano /etc/rsync.conf
```

To set up a script that runs daily and creates a full system backup of the merchant vessel's servers, you can use the crontab command. First, open the crontab editor for the root user by running the following command:

```bash
sudo crontab -e
```

Then, add the following line to the end of the file:

```bash
0 0 * * * tar -czf /path/to/backup.tar.gz --exclude=/tmp --exclude=/var/log /
```

This will run the tar command every day at midnight, creating a compressed archive of the entire file system (`/`) and excluding the `/tmp` and `/var/log` directories.

To set up a remote server on your pirate ship to store the backups, you can use a variety of tools and techniques. One option is to install and configure a server application like openssh-server. On your pirate ship, run the following command to install openssh-server:

```bash
sudo apt-get install openssh-server -y
```

Then, configure the server by editing the `/etc/ssh/sshd_config` file:

```bash
sudo nano /etc/ssh/sshd_config
```

Make any necessary changes to the configuration file (e.g. changing the default port number, enabling key-based authentication), then restart the server by running the following command:

```bash
sudo systemctl restart ssh
```

To modify the daily backup script to transfer the backups to the remote server using rsync over SSH, you can use the rsync command. First, create a new directory on the remote server to store the backups:

```bash
mkdir /path/to/backup
```

Then, run the following command to transfer the backups to the remote server:

```bash
rsync -avz -e ssh /path/to/backup.tar.gz <remote server IP address>:/path/to/backup
```

### **Question 3: The Flying Dutchman**

**Question:**

You are the captain of a pirate ship and have just captured a merchant vessel. The merchant vessel's captain has agreed to hand over all of their valuable cargo in exchange for safe passage back to port. However, before the transfer can take place, you need to ensure that the merchant vessel's computers and servers are secure.

As the resident Linux expert on your pirate ship, you have been tasked with setting up a secure web server for the merchant vessel's website.

Using only the command line, complete the following tasks:

1. Install and configure the Apache web server on the merchant vessel's servers. The web server should use the default port number and serve the website from the `/var/www/html` directory.
2. Set up a script that runs every hour and checks for updates to the system's package manager. If any updates are available, the script should install them.
3. Set up a cron job that runs every day at midnight and creates a full system backup of the merchant vessel's servers. The script should exclude certain directories (e.g. `/tmp`, `/var/log`) and compress the backup using `gzip`.
4. Set up a remote server on your pirate ship to store the backups. The remote server should use SSH for secure communication.
5. Modify the daily backup script to transfer the backups to the remote server using rsync over SSH.

**Answer:**

To install and configure the Apache web server on the merchant vessel's servers, you can use the apt-get command. First, update the package manager's list of available packages by running the following command:

```bash
sudo apt-get update
```

Then, install Apache by running the following command:

```bash
sudo apt-get install apache2 -y
```

Once Apache is installed, you can configure it by editing the `/etc/apache2/apache2.conf` file. You can use a text editor like `nano` to do this:

```bash
sudo nano /etc/apache2/apache2.conf
```

To set up a script that runs every hour and checks for updates to the system's package manager, you can use the crontab command. First, open the crontab editor for the root user by running the following command:

```bash
sudo crontab -e
```

Then, add the following line to the end of the file:

```bash
0 * * * * apt-get update && apt-get upgrade -y
```

This will run the `apt-get update` and `apt-get upgrade -y` commands every hour. The `apt-get update` command checks for updates to the package manager, and the `apt-get upgrade -y` command installs any available updates.

To set up a cron job that runs every day at midnight and creates a full system backup of the merchant vessel's servers, you can use the crontab command. First, open the crontab editor for the root user by running the following command:

```bash
sudo crontab -e
```

Then, add the following line to the end of the file:

```bash
0 0 * * * tar -czf /path/to/backup.tar.gz --exclude=/tmp --exclude=/var/log /
```

This will run the tar command every day at midnight, creating a compressed archive of the entire file system (`/`) and excluding the `/tmp` and `/var/log` directories.

To set up a remote server on your pirate ship to store the backups, you can use a variety of tools and techniques. One option is to install and configure a server application like openssh-server. On your pirate ship, run the following command to install openssh-server:

```bash
sudo apt-get install openssh-server -y
```

Then, configure the server by editing the `/etc/ssh/sshd_config` file:

```bash
sudo nano /etc/ssh/sshd_config
```

Make any necessary changes to the configuration file (e.g. changing the default port number, enabling key-based authentication), then restart the server by running the following command:

```bash
sudo systemctl restart ssh
```

To modify the daily backup script to transfer the backups to the remote server using rsync over SSH, you can use the rsync command. First, create a new directory on the remote server to store the backups:

```bash
mkdir /path/to/backup
```

Then, run the following command to transfer the backups to the remote server:

```bash
rsync -avz -e ssh /path/to/backup.tar.gz <remote server IP address>:/path/to/backup
```

### **Question 4: Operation Blackbeard**

**Question:**

You are the captain of a pirate ship and have just captured a merchant vessel. The merchant vessel's captain has agreed to hand over all of their valuable cargo in exchange for safe passage back to port. However, before the transfer can take place, you need to ensure that the merchant vessel's computers and servers are secure.

As the resident Linux expert on your pirate ship, you have been tasked with setting up a version control system for the merchant vessel's servers.

Using only the command line, complete the following tasks:

1. Install and configure the git version control system on the merchant vessel's servers.
2. Initialize a new git repository in the `/var/www/html` directory.
3. Add all of the files in the `/var/www/html` directory to the repository and commit the changes with the message `"Initial commit"`.
4. Set up a remote repository on your pirate ship using a service like GitHub or GitLab.
5. Connect the local repository on the merchant vessel's servers to the remote repository on your pirate ship.

**Answer:**

To install and configure the git version control system on the merchant vessel's servers, you can use the apt-get command. First, update the package manager's list of available packages by running the following command:

```bash
sudo apt-get update
```

Then, install `git` by running the following command:

```bash
sudo apt-get install git -y
```

Once git is installed, you can configure it by running the following commands:

```bash
git config --global user.name "Your Name"
git config --global user.email "your@email.com"
```

Replace `"Your Name"` and `"your@email.com"` with your own name and email address.

To initialize a new git repository in the `/var/www/html` directory, navigate to that directory and run the following command:

```bash
git init
```

This will create a new git repository in the current directory.

To add all of the files in the `/var/www/html` directory to the repository and commit the changes with the message `"Initial commit"`, run the following commands:

```bash
git add .
git commit -m "Initial commit"
```

The `git add` command stages all of the files in the current directory for commit, and the `git commit` command commits the changes with the specified message.

To set up a remote repository on your pirate ship using a service like GitHub or GitLab, you will need to create an account on the service and create a new repository. Follow the service's instructions for creating a new repository.

To connect the local repository on the merchant vessel's servers to the remote repository on your pirate ship, you will need to add the remote repository as a remote for your local repository. First, copy the URL of the remote repository from the service's website. Then, run the following command in your local repository:

```bash
git remote add origin <remote repository URL>
```

Replace `<remote repository URL>` with the actual URL of the remote repository. This will add the remote repository as a remote named `"origin"` for your local repository. To push your local commits to the remote repository, run the following command:

```bash
git push -u origin master
```

This will push the local master branch to the remote repository.

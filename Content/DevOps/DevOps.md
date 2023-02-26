# **DevOps**

![DevOps Pirate](../../images/devops-pirate.png)

- [What is DevOps](#what-is-devops)
    - [How DevOps Works](#how-devops-works)
    - [Docker](#docker)
        - [Install Docker](#install-docker)
            - [Docker Engine](#docker-engine) 
        - [Docker Compose](#docker-compose)
            - [Install Docker Compose](#install-docker-compose)
        - [Docker Swarm](#docker-swarm)
    - [Kubernetes](#kubernetes)
    - [Infrastructure as Code](#infrastructure-as-code)
        - [Ansible](#ansible)
        - [Install Ansible](#install-ansible)
        - [Jeff Geerling](#jeff-geerling)
        - [Jeff Geerling's Ansible for DevOps](#jeff-geerlings-ansible-for-devops)
        - [Ansible Galaxy](#ansible-galaxy)
        - [Ansible Tower](#ansible-tower)
        - [Ansible Vault](#ansible-vault)
        - [Ansible Molecule](#ansible-molecule)
        - [Ansible Container](#ansible-container)
        - [Ansible Network Automation](#ansible-network-automation)
        - [Ansible Cloud Automation](#ansible-cloud-automation)
        - [Ansible Container Orchestration](#ansible-container-orchestration)
        - [Ansible Service Broker](#ansible-service-broker)
    - [Terraform](#terraform)
        - [Install Terraform](#install-terraform)
        - [Terraform Cloud Development Kit (CDK)](#terraform-cloud-development-kit-cdk)

## **What is DevOps?**

Ahoy matey! Let's talk about DevOps, ye landlubbers!

DevOps be a bunch o' tools, practices, and a philosophy that be gettin' the software development and IT teams walkin' the plank together. It be all about workin' as a crew, communicatin' like parrots, and automatin' all the processes!

Yarr, this be startin' 'round 2007, when the software development and IT teams started grievin' 'bout the old way of doin' things, with the developers writin' code and the IT operations hoisting the sails and keepin' the ship afloat. But DevOps changed all that! It brought the two teams together, like rum and coconuts!

Under DevOps, there be no more "silos". Sometimes, the two teams be mergin' into one big happy crew, with engineers workin' on all parts of the journey from developin' to deploying and operatin'.

DevOps teams use tools to make the journey smoother and quicker, like a good set of sails on a calm day. They use a bunch o' tools called the "DevOps toolchain" to help 'em tackle the important stuff, like continuous integration, continuous delivery, automation, and workin' together like a well-oiled crew!

Even the security teams be gettin' in on the action, with a thing called "DevSecOps". It's like havin' a lookout on the masthead, keepin' a keen eye out for danger at all times!

The DevOps journey be like a never-endin' loop, always improvin' and changin', like the wind direction on a voyage. It's made up of eight phases, representin' the processes, capabilities, and tools needed for development and operations. And throughout it all, the teams be workin' and communicatin' together, like a good crew on a ship!

So hoist the sails and set course for DevOps, me hearties! Yarrr!

### **How DevOps Works?**

Under the DevOps model, development and operations teams are no longer siled. Sometimes, these two teams are merged into a single team where the engineers work across the entire application lifecycle, from development and test to deployment to operations, and develop a range of skills not limited to a single function.

It is an ability to deliver applications and services at high velocity: evolving and improving products at a faster pace than organizations using traditional software development and infrastructure management processes. This speed enables organizations to better serve their customers and compete more effectively in the market.

## **Docker**

Arr matey, ye be askin' about Docker, the popular containerization software that be makin' it easier to ship, run, and manage applications.

Docker be usin' containers to package up an application with all of the parts it be needin' to run, such as libraries and dependencies, and ship it as one package. This be makin' it easier to run the application on any other machine, regardless of the specific environment or configuration.

To work with Docker, ye might be usin' the Docker Engine to build, run, and manage containers. Ye can build your own containers or use ones that other scallywags have built and shared. Ye can also use Docker Compose to define and run multi-container applications, makin' it easier to scale and manage them.

In terms of practical use, ye might be usin' Docker to set up a development environment for your application, or to package and deploy your application to production. Ye can also use Docker to run databases or other services that your application relies on.

So there ye have it, a brief overview of Docker and how ye might be workin' with it. I hope this be helpin' ye to understand this powerful tool for managing and running applications. Shiver me timbers!

### **Install Docker**

To install Docker, ye can follow the instructions on the Docker website. Ye can also use the Docker Toolbox to install Docker on Windows and Mac.

#### **Docker Engine**

Docker Engine be a client-server application that be used to build, run, and manage Docker containers. The Docker Engine be made up of two parts: the Docker daemon and the Docker client.

The Docker daemon be a background service that be runnin' on yer computer. It be responsible for building, runnin', and distributing yer Docker containers. The Docker client be the command line tool that ye use to interact with the Docker daemon.

```bash
curl -fsSL https://get.docker.com -o get-docker.sh
sh get-docker.sh
```

Once Docker be installed, ye can verify that it be workin' by runnin' the docker version command in a terminal window.

### **Docker Compose**

[Awesome Compose](https://github.com/docker/awesome-compose)

Docker Compose be a tool for defining and runnin' multi-container Docker applications. With Compose, ye can use a YAML file to configure your application's services. Then, with a single command, ye can create and start all the services from yer configuration.

#### **Install Docker Compose**

To install Docker Compose, ye can follow the instructions on the Docker Compose website. Ye can also use the Docker Toolbox to install Docker Compose on Windows and Mac.

```bash
COMPOSE_VERSION=`git ls-remote https://github.com/docker/compose | grep refs/tags | grep -oE "[0-9]+\.[0-9][0-9]+\.[0-9]+$" | sort --version-sort | tail -n 1`
sudo sh -c "curl -L https://github.com/docker/compose/releases/download/${COMPOSE_VERSION}/docker-compose-`uname -s`-`uname -m` > /usr/local/bin/docker-compose"
sudo chmod +x /usr/local/bin/docker-compose
sudo sh -c "curl -L https://raw.githubusercontent.com/docker/compose/${COMPOSE_VERSION}/contrib/completion/bash/docker-compose > /etc/bash_completion.d/docker-compose"
```

### **Docker Swarm**

[Docker Swarm Rocks](https://dockerswarm.rocks/)

Docker Swarm be a native clustering tool for Docker. It be used to deploy and manage a cluster of Docker Engines.

## **Kubernetes**

Kubernetes (also known as "K8s") is an open-source system for automating the deployment, scaling, and management of containerized applications. It helps to provide a consistent and reliable environment for running applications, regardless of where they are deployed.

In a pirate theme, you could think of Kubernetes as a way to manage and maintain your fleet of ships (the containerized applications). Instead of having to manually deploy and manage each ship individually, Kubernetes allows you to automate the process and scale your fleet as needed. This can help you to be more efficient and responsive, as you can deploy new ships or make changes to existing ones more quickly and easily.

Kubernetes also helps to ensure that your ships are running smoothly and reliably, by providing features like automatic self-healing, rolling updates, and resource management. This can help to keep your fleet seaworthy and ready to set sail at a moment's notice, no matter where you are in the world.

## **Infrastructure as Code**

Infrastructure as code (IaC) is a way to define and manage your infrastructure and its dependencies using code, rather than manually configuring resources through a graphical user interface. This allows you to version control your infrastructure, automate the provisioning and management of resources, and apply testing and deployment practices similar to those used in software development.

In a pirate theme, you could think of infrastructure as code as a way to manage and maintain your fleet of ships and their various systems and equipment. Instead of manually configuring and repairing each ship's sails, masts, and engines, you could use code to define how these components should be set up and configured. This would allow you to automate the process of building and repairing your ships, as well as make it easier to scale your fleet as needed.

By using infrastructure as code, you can also more easily track and manage changes to your ships' systems and equipment over time, as well as roll back any changes that might cause problems. This can help you to keep your fleet seaworthy and ready to set sail at a moment's notice, no matter where you are in the world.

### **Ansible**

Ansible is a configuration management tool that can be used to automate the provisioning and management of infrastructure. It can be used to automate the configuration of servers, networks, and other infrastructure components, and it can also be used to automate the deployment of applications.

In a pirate theme, you could think of Ansible as a tool that can be used to automate the provisioning and management of a fleet of ships. It can be used to automate the configuration of a ship's sails, masts, and engines, as well as the deployment of new cannons and other equipment.

Ansible can be used to automate the provisioning and management of infrastructure, including:

**Servers:** Ansible can be used to automate the configuration of servers, including installing software, configuring services, and managing users and groups.

**Networks:** Ansible can be used to automate the configuration of networks, including configuring switches, routers, and firewalls.

**Cloud:** Ansible can be used to automate the configuration of cloud infrastructure, including configuring virtual machines, load balancers, and storage.

**Containers:** Ansible can be used to automate the configuration of containers, including configuring Docker containers and Kubernetes clusters.

You might imagine that Ansible is a useful tool for pirates to automate the provisioning and management of their fleet of ships. It can be used to automate the configuration of a ship's sails, masts, and engines, as well as the deployment of new cannons and other equipment.

#### **Install Ansible**

Ansible can be installed on a Linux system using the package manager for your distribution. For example, on Ubuntu, you can install Ansible using the following command:

```bash
sudo apt-get install ansible -y
```

#### **Jeff Geerling**

[@geerlingguy GitHub](https://github.com/geerlingguy) | [@geerlingguy Twitter](https://twitter.com/geerlingguy) | [geerlingguy.com](https://www.geerlingguy.com/) | [Jeff Geerling on YouTube](https://www.youtube.com/c/jeffgeerling)

Jeff Geerling is a software developer and author who has written several books about Ansible, including Ansible for DevOps and Ansible for Kubernetes.

You might imagine that Jeff Geerling is a useful person for pirates to know. He has written several books about Ansible, including Ansible for DevOps and Ansible for Kubernetes.

#### **Jeff Geerling's Ansible for DevOps**

[Ansible for DevOps](https://www.ansiblefordevops.com)

Jeff Geerling's Ansible for DevOps is a book that can be used to learn how to use Ansible to automate the provisioning and management of infrastructure. It covers the basics of Ansible, including how to install and configure Ansible, how to write Ansible playbooks, and how to use Ansible to automate the configuration of servers, networks, and other infrastructure components.

You might imagine that Jeff Geerling's Ansible for DevOps is a useful book for pirates to learn how to use Ansible to automate the provisioning and management of their fleet of ships. It covers the basics of Ansible, including how to install and configure Ansible, how to write Ansible playbooks, and how to use Ansible to automate the configuration of servers, networks, and other infrastructure components.

#### **Ansible Galaxy**

Ansible Galaxy is a repository of Ansible roles that can be used to automate the configuration of servers, networks, and other infrastructure components. It can be used to automate the configuration of a wide variety of software, including web servers, databases, and monitoring tools.

You might imagine that Ansible Galaxy is a useful tool for pirates to automate the configuration of their fleet of ships. It can be used to automate the configuration of a wide variety of software, including web servers, databases, and monitoring tools.

#### **Ansible Tower**

Ansible Tower is a web-based user interface that can be used to manage Ansible playbooks and automate the provisioning and management of infrastructure. It can be used to automate the configuration of servers, networks, and other infrastructure components, and it can also be used to automate the deployment of applications.

You might imagine that Ansible Tower is a useful tool for pirates to manage their fleet of ships and automate the provisioning and management of their infrastructure. It can be used to automate the configuration of servers, networks, and other infrastructure components, and it can also be used to automate the deployment of applications.

#### **Ansible Vault**

Ansible Vault is a tool that can be used to encrypt sensitive data that is stored in Ansible playbooks. This allows you to store sensitive data, such as passwords, in a secure way that can be used by Ansible playbooks without exposing the data to unauthorized users.

You might imagine that Ansible Vault is a useful tool for pirates to encrypt sensitive data that is stored in Ansible playbooks. This allows them to store sensitive data, such as passwords, in a secure way that can be used by Ansible playbooks without exposing the data to unauthorized users.

#### **Ansible Molecule**

Ansible Molecule is a tool that can be used to test Ansible roles. It can be used to test the configuration of servers, networks, and other infrastructure components, and it can also be used to test the deployment of applications.

You might imagine that Ansible Molecule is a useful tool for pirates to test Ansible roles. It can be used to test the configuration of servers, networks, and other infrastructure components, and it can also be used to test the deployment of applications.

#### **Ansible Container**

Ansible Container is a tool that can be used to build and deploy containerized applications. It can be used to automate the configuration of Docker containers and Kubernetes clusters, and it can also be used to automate the deployment of applications.

You might imagine that Ansible Container is a useful tool for pirates to build and deploy containerized applications. It can be used to automate the configuration of Docker containers and Kubernetes clusters, and it can also be used to automate the deployment of applications.

#### **Ansible Network Automation**

Ansible Network Automation is a collection of Ansible roles that can be used to automate the configuration of networks, including configuring switches, routers, and firewalls. It can be used to automate the configuration of a wide variety of network devices, including Cisco, Juniper, and Arista.

You might imagine that Ansible Network Automation is a useful tool for pirates to automate the configuration of their fleet of ships. It can be used to automate the configuration of a wide variety of network devices, including Cisco, Juniper, and Arista.

#### **Ansible Cloud Automation**

Ansible Cloud Automation is a collection of Ansible roles that can be used to automate the configuration of cloud infrastructure, including configuring virtual machines, load balancers, and storage. It can be used to automate the configuration of a wide variety of cloud providers, including Amazon Web Services, Microsoft Azure, and Google Cloud Platform.

You might imagine that Ansible Cloud Automation is a useful tool for pirates to automate the configuration of their fleet of ships. It can be used to automate the configuration of a wide variety of cloud providers, including Amazon Web Services, Microsoft Azure, and Google Cloud Platform.

#### **Ansible Container Orchestration**

Ansible Container Orchestration is a collection of Ansible roles that can be used to automate the configuration of containers, including configuring Docker containers and Kubernetes clusters. It can be used to automate the configuration of a wide variety of container platforms, including Docker, Kubernetes, and OpenShift.

You might imagine that Ansible Container Orchestration is a useful tool for pirates to automate the configuration of their fleet of ships. It can be used to automate the configuration of a wide variety of container platforms, including Docker, Kubernetes, and OpenShift.

#### **Ansible Service Broker**

Ansible Service Broker is a tool that can be used to automate the deployment of applications. It can be used to automate the configuration of servers, networks, and other infrastructure components, and it can also be used to automate the deployment of applications.

You might imagine that Ansible Service Broker is a useful tool for pirates to automate the deployment of applications. It can be used to automate the configuration of servers, networks, and other infrastructure components, and it can also be used to automate the deployment of applications.

### **Terraform**

Terraform is a tool that can be used to automate the provisioning and management of infrastructure. It can be used to automate the configuration of servers, networks, and other infrastructure components, and it can also be used to automate the deployment of applications.

In a pirate theme, you could think of Terraform as a tool that can be used to automate the provisioning and management of a fleet of ships. It can be used to automate the configuration of a ship's sails, masts, and engines, as well as the deployment of new cannons and other equipment.

Terraform can be used to automate the provisioning and management of infrastructure, including:

**Servers:** Terraform can be used to automate the configuration of servers, including installing software, configuring services, and managing users and groups.

**Networks:** Terraform can be used to automate the configuration of networks, including configuring switches, routers, and firewalls.

**Cloud:** Terraform can be used to automate the configuration of cloud infrastructure, including configuring virtual machines, load balancers, and storage.

**Containers:** Terraform can be used to automate the configuration of containers, including configuring Docker containers and Kubernetes clusters.

You might imagine that Terraform is a useful tool for pirates to automate the provisioning and management of their fleet of ships. It can be used to automate the configuration of a ship's sails, masts, and engines, as well as the deployment of new cannons and other equipment.

#### **Install Terraform**

Terraform can be installed on a Linux system using the package manager for your distribution. For example, on Ubuntu, you can install Terraform using the following command:

```bash
sudo apt-get install terraform -y
```

Another option for more advanced users is to use `tfenv` to install Terraform. `tfenv` is a tool that can be used to install and manage multiple versions of Terraform on a single system. It can be installed using the following command:

- Check out tfenv into any path (here is `${HOME}/.tfenv`)

```bash
git clone --depth=1 https://github.com/tfutils/tfenv.git ~/.tfenv
```

- Add `~/.tfenv/bin` to your `$PATH` any way you like

```bash
echo 'export PATH="$HOME/.tfenv/bin:$PATH"' >> ~/.bashrc
```

On Ubuntu/Debian touching `/usr/local/bin` might require sudo access, but you can create `${HOME}/bin` or `${HOME}/.local/bin` and on next login it will get added to the session `$PATH` or by running `. ${HOME}/.profile` it will get added to the current shell session's `$PATH`.

```bash
mkdir -p ~/.local/bin/
. ~/.profile
ln -s ~/.tfenv/bin/* ~/.local/bin
which tfenv
```

#### **Terraform Cloud Development Kit (CDK)**

Terraform Cloud Development Kit (CDK) is a tool that can be used to automate the provisioning and management of infrastructure. It can be used to automate the configuration of servers, networks, and other infrastructure components, and it can also be used to automate the deployment of applications.

In a pirate theme, you could think of Terraform Cloud Development Kit (CDK) as a tool that can be used to automate the provisioning and management of a fleet of ships. It can be used to automate the configuration of a ship's sails, masts, and engines, as well as the deployment of new cannons and other equipment.

To install the Terraform Cloud Development Kit (CDK), you can use the following command:

```bash
npm install --global cdktf-cli@latest
cdktf help
cdktf

Commands:
  cdktf init                Create a new cdktf project from a template.
  cdktf get                 Generate CDK Constructs for Terraform providers and
                            modules.
  cdktf convert             Converts a single file of HCL configuration to CDK
                            for Terraform. Takes the file to be converted on
                            stdin.
  cdktf deploy [stacks...]  Deploy the given stacks             [aliases: apply]
  cdktf destroy [stacks..]  Destroy the given stacks
  cdktf diff [stack]        Perform a diff (terraform plan) for the given stack
                                                                 [aliases: plan]
  cdktf list                List stacks in app.
  cdktf login               Retrieves an API token to connect to Terraform Cloud
                            or Terraform Enterprise.
  cdktf synth               Synthesizes Terraform code for the given app in a
                            directory.                     [aliases: synthesize]
  cdktf watch [stacks..]    [experimental] Watch for file changes and
                            automatically trigger a deploy
  cdktf output [stacks..]   Prints the output of stacks       [aliases: outputs]
  cdktf debug               Get debug information about the current project and
                            environment
  cdktf provider            A set of subcommands that facilitates provider
                            management
  cdktf completion          generate completion script

Options:
      --version                   Show version number                  [boolean]
      --disable-plugin-cache-env  Dont set TF_PLUGIN_CACHE_DIR automatically.
                                  This is useful when the plugin cache is
                                  configured differently. Supported using the
                                  env CDKTF_DISABLE_PLUGIN_CACHE_ENV.
                                                      [boolean] [default: false]
      --log-level                 Which log level should be written. Only
                                  supported via setting the env CDKTF_LOG_LEVEL
                                                                        [string]
  -h, --help                      Show help                            [boolean]

Options can be specified via environment variables with the "CDKTF_" prefix
(e.g. "CDKTF_OUTPUT")
```

Add `--help` to any subcommand to learn more about what it does and available options.

```bash
cdktf init --help
cdktf init

Create a new cdktf project from a template.

Options:
      --version                   Show version number                  [boolean]
      --disable-plugin-cache-env  Dont set TF_PLUGIN_CACHE_DIR automatically.
                                  This is useful when the plugin cache is
                                  configured differently. Supported using the
                                  env CDKTF_DISABLE_PLUGIN_CACHE_ENV.
                                                      [boolean] [default: false]
      --log-level                 Which log level should be written. Only
                                  supported via setting the env CDKTF_LOG_LEVEL
                                                                        [string]
      --template                  The template to be used to create a new
                                  project. Either URL to zip file or one of the
                                  built-in templates: ["csharp", "go", "java",
                                  "python", "python-pip", "typescript"] [string]
      --project-name              The name of the project.              [string]
      --project-description       The description of the project.       [string]
      --dist                      Install dependencies from a "dist" directory
                                  (for development)                     [string]
      --local                     Use local state storage for generated
                                  Terraform.          [boolean] [default: false]
      --cdktf-version             The cdktf version to use while creating a new
                                  project.          [string] [default: "0.13.0"]
      --from-terraform-project    Use a terraform project as the basis, CDK
                                  constructs will be generated based on the .tf
                                  files in the path                     [string]
      --enable-crash-reporting    Enable crash reporting for the CLI, refer to
                                  https://cdk.tf/crash-reporting for more
                                  details                              [boolean]
  -h, --help                      Show help                            [boolean]
```
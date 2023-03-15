---
title: Linux for Pirates!
layout: home
---

![Linux for Pirates!](images/linux-for-pirates.jpg)

Started By [Dean Lofts](https://linkfree.eddiehub.io/loftwah) | [GitHub](https://github.com/loftwah)

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
**Table of Contents**

- [In memory of Aaron Swartz](#in-memory-of-aaron-swartz)
- [What is Linux?](Content/Linux/)
  - [Open source](Content/Open-Source/Open-Source.md)
  - [What is the Linux kernel?](#what-is-the-linux-kernel)
  - [Linus Torvalds](#linus-torvalds)
  - [Richard Stallman](#richard-stallman)
- [Before we begin](#before-we-begin)
- [About the author (This isn't on the test)](#about-the-author-this-isnt-on-the-test)
- [Chapter One - Getting Started](#chapter-one---getting-started)
  - [Operating System](Content/Operating-System/Operating-System.md)
  - [Where to go from here?](#where-to-go-from-here)
    - [Backend](Content/Backend/Backend.md)
    - [Cloud Computing](Content/Cloud/Cloud.md)
    - [Cybersecurity](Content/Cybersecurity/Cybersecurity.md)
    - [Data analysis and interpretation](Content/Data%20Science/Data%20Science.md#data-analysis-and-interpretation)
    - [Database](Content/Database/Database.md)
    - [Design](Content/Design/Design.md)
    - [Developer Advocacy and Developer Relations](Content/DevRel/DevRel.md)
    - [Finance](Content/Finance/Finance.md)
    - [Frontend](Content/Design/Frontend.md)
    - [Management](Content/Management/Management.md)
    - [Marketing](Content/Marketing/Marketing.md)
    - [Network Engineering](Content/Networking/Network_Engineering.md)
    - [Operations](Content/Operations/Operations.md#operations)
    - [Sales](Content/Sales/Sales.md#sales)
- [Chapter Two - The Fundamentals](#chapter-two---the-fundamentals)
  - [DevOps](Content/DevOps/DevOps.md)
  - [How DevOps Works?](#how-devops-works)
  - [Handybilly](Content/Linux/Linux.md#handybilly)
  - [Linux filesystem](Content/Linux/Linux.md)
  - [Networking](Content/Networking/Networking.md)
  - [Bash](Content/Linux/Linux.md#bash)
  - [Vim (Vi IMproved)](Content/Linux/Linux.md#vim-vi-improved)
  - [VS Code](#vs-code)
  - [The Internet](Content/Internet/Internet.md)
  - [Amazon Web Services](Content/Cloud/Cloud.md)
  - [Cloudflare](#cloudflare)
  - [CI/CD](Content/DevOps/CICD.md)
  - [DigitalOcean](Content/Cloud/Cloud.md)
  - [eBPF](#ebpf)
  - [DNS (Domain Name System)](Content/Networking/Networking.md)
  - [Docker](Content/DevOps/DevOps.md)
  - [Git](Content/Git/Git.md)
  - [Homebrew](#homebrew)
  - [HTML](Content/Design/Design.md)
  - [HTTP](Content/Networking/Networking.md)
  - [JSON (JavaScript Object Notation)](#json-javascript-object-notation)
  - [ICMP (Internet Control Message Protocol)](#icmp-internet-control-message-protocol)
  - [Infrastructure as Code](Content/DevOps/DevOps.md)
  - [IP Addresses](#ip-addresses)
    - [What is an IP made up of?](#what-is-an-ip-made-up-of)
  - [JavaScript](Content/Design/Design.md)
  - [Latency](#latency)
  - [Logging](#logging)
    - [Logrotate](#logrotate)
  - [Monitoring](#monitoring)
  - [OSI model](Content/Networking/Networking.md#osi-model)
  - [SSH](Content/Networking/Networking.md#ssh)
  - [SSL/TLS](Content/Networking/Networking.md#ssltls)
  - [Streaming](#streaming)
  - [Subnet](Content/Networking/Networking.md#subnet)
  - [TCP/IP](Content/Networking/Networking.md#tcpip)
  - [UDP](Content/Networking/Networking.md#udp)
  - [YAML (Yet Another Markup Language)](Content/DevOps/DevOps.md#yaml-yet-another-markup-language)
  - [Zsh](Content/Linux/Linux.md#zsh)
- [Chapter Three: Your first day as a pirate](#chapter-three-your-first-day-as-a-pirate)
  - [Common problems](#common-problems)
  - [Initiation](#initiation)
    - [Question 1: Arrrrrgh](#question-1-arrrrrgh)
    - [Question 2: The Black Pearl](#question-2-the-black-pearl)
    - [Question 3: The Flying Dutchman](#question-3-the-flying-dutchman)
    - [Question 4: Operation Blackbeard](#question-4-operation-blackbeard)
  - [Is it YAML or YML?](#is-it-yaml-or-yml)
- [GitHub Actions in the wild](Content/Git/Git.md#github-actions-in-the-wild)
- [Chapter Four - Desktop Environments and Window Managers](Content/Desktop/Desktop.md#chapter-four---desktop-environments-and-window-managers)
- [Chapter 5: Ruby on Rails and the Seven Seas](#chapter-5-ruby-on-rails-and-the-seven-seas)
- [A stern warning: The dangers of the high seas](#a-stern-warning-the-dangers-of-the-high-seas)
- [Jokes](#jokes)
  - [Check Yer Deployments](#check-yer-deployments)
- [**Testemonials**](#testemonials)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

## **In memory of Aaron Swartz**

[The Internet's Own Boy: The Story of Aaron Swartz](https://www.youtube.com/watch?v=M85UvH0TRPc)

> **Note** This is a **must** watch documentary.

![Aaron Swartz](images/aaronswartz.png)

[Aaron Swartz](https://en.wikipedia.org/wiki/Aaron_Swartz) was a computer programmer, entrepreneur, and internet activist who made significant contributions to the development of the internet and the open access movement.

Aaron was born in 1986, and became interested in computers and the internet at a young age. He was a brilliant and talented programmer, and was known for his ability to quickly grasp and master new technologies. He co-authored the RSS 1.0 specification at the age of 14, and went on to work on a variety of other projects, including the development of the Creative Commons license, the building of the first consumer web feed platform, and the creation of the social news site Reddit.

![Aaron Swartz as a Pirate](images/aaron-swartz-pirate.png)

Aaron was also a strong advocate for open access, which is the movement to make knowledge and information freely available to all, rather than being locked behind paywalls and controlled by a few powerful corporations or institutions. He believed that access to knowledge and information was a fundamental right, and that it should be freely available to everyone.

Aaron's work had a major impact on the development of the internet and the open access movement, and he is remembered as a pioneer and a hero by many in the tech community. Tragically, Aaron took his own life in 2013, at the age of 26. His legacy lives on through the work of those who continue to fight for open access and the free flow of information. Arrr!

### **What is the Linux kernel?**

The Linux kernel is the core component of the Linux operating system. It is a piece of software that acts as an interface between the hardware and the rest of the operating system, and is responsible for managing the resources of the computer and allocating them to the various applications and processes that are running.

The Linux kernel was originally developed by Linus Torvalds in 1991, and was released as open source software under the GNU General Public License. It is written in the C programming language, and is available for a wide variety of computer architectures, including x86, ARM, and PowerPC.

### **Linus Torvalds**

![Linus Torvalds](images/linustorvalds.png)

Linus Torvalds is the creator of the Linux operating system. He is a computer science student at the University of Helsinki in Finland, and was interested in creating an operating system that would be more flexible and open than the proprietary operating systems that were available.

### **Richard Stallman**

![Richard Stallman](images/richardstallman.png)

Richard Stallman is the creator of the GNU operating system. He is a computer science student at the Massachusetts Institute of Technology (MIT), and was interested in creating an operating system that would be more flexible and open than the proprietary operating systems that were available.

![Linus Torvalds and Richard Stallman as Pirates](images/linus_richard.png)

## **Before we begin**

Loftwah stood at the helm of his ship, staring out at the vast expanse of the ocean. He had been a pirate for as long as he could remember, and he loved nothing more than the thrill of the hunt and the rush of adrenaline that came with finding treasure.

But Loftwah was no ordinary pirate. He was a master of technology, using his advanced gadgets and devices to outsmart his enemies and outmaneuver them on the high seas. "Any sufficiently advanced technology is equivalent to magic," he thought to himself, smiling at the thought of all the treasure he had acquired through his clever use of technology.

But even Loftwah knew that technology was not always the answer. He had learned the hard way that "social engineering bypasses all technologies, including firewalls." He had lost more than one treasure to clever pirates who used their charm and charisma to manipulate him and his crew.

Loftwah was not one to accept defeat easily, though. "People said I should accept the world. Bullshit! I don't accept the world," he thought, determined to find a way to outsmart even the most clever of his rivals.

And so he set his sights on the greatest treasure of them all: the fabled Black Pearl, a ship that was said to be filled with unimaginable riches. Loftwah knew that he couldn't do it alone, though. He needed a crew of skilled pirates who were just as determined and clever as he was.

As he searched for the perfect crewmates, Loftwah couldn't help but think about the dangers of relying too much on technology. "The real danger is not that computers will begin to think like men, but that men will begin to think like computers," he thought, knowing that it was important to keep a balance between using technology and using one's own intelligence and creativity.

Finally, Loftwah found the perfect crew. They were a diverse group, each with their own unique skills and talents. Together, they set off on their quest for the Black Pearl, using all of their combined knowledge and expertise to outsmart their enemies and navigate the dangerous waters.

As they sailed closer and closer to their goal, Loftwah couldn't help but feel a sense of excitement and determination. "Patience, persistence and perspiration make an unbeatable combination for success," he thought, knowing that they would stop at nothing to claim the treasure that was rightfully theirs.

And in the end, their hard work paid off. They found the Black Pearl, and it was even more magnificent than they had imagined. "It doesn't matter what you know, what matters is when you know," Loftwah thought as he gazed at the treasure-filled ship, knowing that their knowledge and skills had been key to their success.

As they sailed back home, filled with treasure and stories to tell, Loftwah couldn't help but feel grateful for the diverse and skilled crew that he had assembled. He knew that it was their combined knowledge and creativity that had led them to victory, and he couldn't wait to see what other adventures they would have together in the future.

## **About the author (This isn't on the test)**

![Dean Lofts](images/deanlofts.png)

Once upon a time, in the golden age of piracy, there lived a fearless pirate by the name of Dean (Loftwah) Lofts. Loftwah was a notorious buccaneer, known throughout the seven seas for their technical expertise and programming prowess.

Loftwah commanded a fearsome crew of pirates, who sailed the high seas in search of treasure and adventure. They were a motley crew, made up of scallywags, scoundrels, and ne'er-do-wells from every corner of the globe, including the wild and untamed shores of Australia.

Together, Loftwah and their crew roamed the Caribbean, plundering and pillaging their way from island to island. They braved fierce storms and battled fierce foes, always coming out on top thanks to Loftwah's quick wit and sharp sword, as well as their formidable knowledge of Bash, PHP, Python, Ruby, HTML, JavaScript, and other programming languages.

One day, Loftwah and the crew set their sights on a rich Spanish galleon, loaded down with gold and jewels. They crept up on the ship under cover of darkness, and with a mighty roar, they boarded the vessel and took control.

The Spanish crew fought bravely, but they were no match for the fierce pirates led by Loftwah. In the end, Loftwah and their crew emerged victorious, the galleon was theirs for the taking.

As they sailed off into the sunset with their prize, Loftwah raised their fist to the sky and let out a mighty "YARGH!" It was a good day to be a pirate.

So if you ever find yourself sailing the high seas and you see a pirate flag with a Loftwah-shaped skull and crossbones on it, beware! You're in for a wild ride with the fearless Loftwah and their trusty crew. Ahoy, matey!

## **Chapter One - Getting Started**

![Chapter One - Getting Started](images/chapterone.png)

Avast ye, landlubbers! Linux be a free and open-source operating system that be runnin' on the Linux kernel, a core component o' the operating system. It be used in a variety o' devices, from desktops to servers to smartphones to embedded systems.

There be many reasons why a scurvy dog might want to set sail with Linux, including:

- **It be free and open-source:** Linux be freely available to all who be wantin' to use it, and the source code be open for all to study, modify, and distribute.

- **It be highly customisable:** Linux allows users to customise almost every aspect o' the operating system, from the desktop environment to the window manager to the system utilities.

- **It be stable and reliable:** Linux be known for its stability and reliability, and it be often used in mission-critical systems where uptime be crucial.

- **It has a large user community:** Linux has a large and active user community, which means there be a wealth o' knowledge and support available online.

- **It be secure:** Linux be generally considered to be more secure than other operating systems, as it be less vulnerable to malware and other security threats.

- **It has a wide range o' software available:** Linux has a huge repository o' free and open-source software available, from office applications to media players to games.

All in all, Linux be a versatile and powerful operating system that be suitable for a wide range o' uses. Whether ye be a greenhorn or an experienced swashbuckler, Linux has something to offer for all.

### **Where to go from here?**

Aye, matey! If ye be interested in pursuin' a career in the field o' Linux, there be several steps ye can take to get started:

**Gain a solid understanding of the Linux operating system:** To be successful in a Linux-related career, it be important to have a strong understanding of the Linux operating system and its various components, including the kernel, shell, and system libraries. Ye can gain this understanding through online courses, books, or hands-on experience using Linux on yer own computer or in a virtual machine.

**Build up yer skills and knowledge:** There be many different areas in which ye can specialize within the Linux field, such as system administration, network engineering, or software development. To increase yer chances of landin' a job in one o' these areas, it be important to build up yer skills and knowledge in the specific technologies and tools that be used in that field. This might include learnin' programming languages, masterin' command-line utilities, or becomin' familiar with different Linux distributions.

**Get certified:** Many employers look for candidates who have formal certification in Linux or related technologies. There be several organizations that offer Linux certification exams, such as the Linux Professional Institute (LPI) and the Red Hat Certified Engineer (RHCE) program. Earning a certification can demonstrate yer expertise and commitment to the field, and can make ye a more competitive job candidate.

**Network and build relationships:** Networkin' and building relationships with others in the Linux community can be a valuable way to learn about job openings and get yer foot in the door at companies that be hirin'. Attend local meetups, participate in online forums and discussion groups, and consider joinin' a Linux user group or professional association.

**Look for entry-level positions:** If ye be just startin' out in yer Linux career, it might be helpful to look for entry-level positions that can provide ye with the opportunity to gain hands-on experience and build up yer skills. These might include internships, junior-level system administrator positions, or entry-level software development roles. As ye gain experience, ye can then look for more advanced positions that align with yer career goals.

- [freeCodeCamp](https://www.freecodecamp.org/) be a non-profit organisation that be dedicated to helpin' people learn to code for free. It be run by a community o' volunteers, and it be supported by donations from the community.

- [The Odin Project](https://www.theodinproject.com/) be a free online curriculum that be designed to teach web development. It be run by a community o' volunteers, and it be supported by donations from the community.

## **Chapter Two - The Fundamentals**

![Chapter Two - The Fundamentals](images/fundamentals.png)

Ahoy mateys! If ye be lookin' to set sail on the Linux sea, here be some things ye'll need to know:

**Learn the command line:** The command line be the primary way to interact with a Linux system, so it be important to learn the basic commands and how to navigate the file system.

**Understand file permissions:** In Linux, each file and directory be owned by a specific user and group, and have permissions that control who can read, write, or execute them. It be important to understand how to set and manage these permissions.

**Install and manage software:** In Linux, software be installed and managed using package managers like apt or yum. Ye'll need to learn how to use these tools to install and update software on yer system.

**Work with users and groups:** In Linux, users and groups be used to control access to resources on the system. Ye'll need to learn how to create and manage users and groups, and how to set up user accounts and permissions.

**Customize yer system:** Linux be highly customizable, and ye can tweak yer system to suit yer needs and preferences. Ye'll need to learn how to customize yer system's settings, install and configure desktop environments, and more.

### **VS Code**

[VS Code Website](https://code.visualstudio.com) | [Awesome VS Code](https://github.com/viatsko/awesome-vscode)

Arr matey, ye be askin' about Visual Studio Code, a popular and powerful code editor that be makin' it easier for ye to write, debug, and collaborate on code.

VS Code be packin' a lot of useful features for developers, such as syntax highlighting, code completion, and built-in support for version control systems like Git. Ye can also extend VS Code with plugins and extensions to add even more functionality, such as debugging tools, linting, and code formatting.

To work with VS Code, ye simply need to open up the editor and start writin' or editin' your code. Ye can also use the integrated terminal to run command-line tools, such as compilers or test runners.

VS Code be available on a variety of platforms, including Windows, Mac, and Linux, so ye can use it on the operating system of your choosin'.

So there ye have it, a brief overview of Visual Studio Code and how ye might be usin' it as a developer. I hope this be helpin' ye to understand this powerful code editor and all that it be capable of. Ahoy!

**Python:**

`python3 -m http.server`

This command will start a web server using Python's built-in `http.server` module. No additional dependencies are required.

**Node.js:**

`npx http-server`

This command will start a web server using the `http-server` package, which can be installed by running `npm install -g http-server`.

**Ruby:**

`ruby -run -ehttpd . -p8000`

This command will start a web server using Ruby's built-in `WEBrick` library. No additional dependencies are required.

**PHP:**

`php -S localhost:8000`

This command will start a web server using PHP's built-in development server. No additional dependencies are required.

**Go:**

`go run $(go env GOPATH)/src/github.com/golang/example/outyet/main.go`

This command will start a web server using the Go programming language. To install Go on Ubuntu run the following:

`sudo apt-get install golang -y`

### **Cloudflare**

[Cloudflare](https://www.cloudflare.com/)

Cloudflare is a content delivery network (CDN) and DNS service that can be used to improve the performance and security of a website. It does this by caching content on its global network of servers, which can help to reduce the load on the origin server. It also provides a number of security features, such as DDoS protection, bot management, and TLS encryption.

Ahoy, matey! For Cloudflare, ye should be well-versed in the ways of the web. This means having a strong understanding of how to use Cloudflare's various services to protect and optimize websites.

Ye should be able to set up and configure Cloudflare's services such as its content delivery network (CDN), DDoS protection, and SSL/TLS certificates. Ye should also be familiar with Cloudflare's Web Application Firewall (WAF) and know how to use it to protect websites from malicious traffic and attacks.

In addition to these technical skills, it be important for ye to be able to communicate with clients and stakeholders about the benefits of using Cloudflare. Ye should be able to explain how Cloudflare can improve website performance, security, and reliability in a way that is easy for non-technical folks to understand.

Finally, as a true Cloudflare professional, ye should be able to keep yer head in a crisis and be able to think on yer feet. Whether it be dealing with a sudden influx of traffic to a client's website or a network outage, ye should be able to think quickly and come up with solutions to keep yer ship sailing smoothly. So hoist the mainsail and get to work, matey!

### **eBPF**

[Awesome eBFP](https://github.com/zoidbergwill/awesome-ebpf)

eBPF (extended Berkeley Packet Filter) is a technology that allows for the dynamic insertion of BPF programs into the Linux kernel at various hook points. It allows for the creation of powerful, flexible, and efficient tracing and monitoring tools, as well as the ability to write custom kernel modules without having to write any C code.

In a pirate theme, you could think of eBPF as a way to add new features to your ship (the Linux kernel). Instead of having to modify the ship's hull (the Linux kernel) to add new features, eBPF allows you to add new features by inserting new code into the ship's hull (the Linux kernel). This allows you to add new features without having to modify the ship's hull, which can be a time-consuming and error-prone process.

### **Homebrew**

[Homebrew](https://brew.sh)

Homebrew is a free and open-source package management system for macOS and Linux that simplifies the installation of software on those operating systems. It allows users to install and manage software packages written in a variety of programming languages, such as Python, Ruby, and Go, as well as libraries and other dependencies needed to run those programs.

Linuxbrew is a fork of Homebrew that is designed to run on Linux systems. It provides the same functionality as Homebrew, but is specifically tailored for use on Linux systems. It is written in Ruby and can be used to install and manage software packages on a wide range of Linux distributions, including Debian, Ubuntu, CentOS, and Fedora.

To install Homebrew on macOS, you can open a terminal window and run the following command:

```bash
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install.sh)"
```

To install Linuxbrew on a Linux system, you can run the following command in a terminal window:

```bash
sh -c "$(curl -fsSL https://raw.githubusercontent.com/Linuxbrew/install/master/install.sh)"
```

Both Homebrew and Linuxbrew use a command-line interface to install and manage packages. Once installed, you can use the brew command to search for and install packages, as well as manage and update the packages you have installed.

For example, to search for a package called "treasuremap," you can run the following command:

```bash
brew search treasuremap
```

To install a package called "treasuremap," you can run the following command:

```bash
brew install treasuremap
```

### **JSON (JavaScript Object Notation)**

JSON (JavaScript Object Notation) is a secret code that pirates use to store and share information about their treasure, their crew, and their adventures on the high seas.

JSON is a lightweight, text-based data interchange format that is used to transmit data between a server and a client, or between different systems. It is based on the JavaScript programming language, but can be used with many other programming languages as well.

JSON is a popular choice for storing and exchanging data because it is easy for humans to read and write, and it is easy for computers to parse and generate. It is often used to send data from a server to a web page, or to store data in a NoSQL database, such as MongoDB.

To use JSON, you need to understand its syntax, which is based on key-value pairs and lists of values. A key-value pair consists of a unique key and a value, separated by a colon. A list of values is an ordered collection of values, separated by commas and enclosed in square brackets.

JSON is a powerful and flexible tool that is widely used in modern web development, and is an important part of a pirate's arsenal. Arrr!

### **ICMP (Internet Control Message Protocol)**

ICMP (Internet Control Message Protocol) can be thought of as a communication protocol that is used to transmit messages between devices on a network. It is often used to send error messages or to request information from other devices.

On a Linux system, ICMP is used for a variety of purposes, including:

**Error reporting:** ICMP can be used to send error messages when there is a problem with a network connection or when a packet of data cannot be delivered.

**Network diagnosis:** ICMP can be used to request information from other devices on the network, such as the round-trip time of a packet or the maximum transmission unit (MTU) of a link. This can be useful for diagnosing network problems and optimizing network performance.

**Network discovery:** ICMP can be used to send "ping" messages, which are used to determine if a device is reachable on the network. This can be useful for detecting network outages or for verifying network connectivity.

You might imagine that ICMP is a useful tool for pirates to keep track of their network and diagnose problems. It allows them to communicate with other devices on the network and request information that can help them understand how the network is functioning.

An example of troubleshooting a network problem using ICMP might look like this:

1. A pirate sends a ping message to a device on the network.
2. The device responds with an ICMP echo reply message.
3. The pirate receives the echo reply message and uses it to determine the round-trip time of the packet.
4. The pirate uses the round-trip time to diagnose the problem and determine the cause of the network outage.
5. The pirate fixes the problem and the network is restored.
6. The pirate sends another ping message to the device to verify that the network is working again.
7. The device responds with an ICMP echo reply message.

### **IP Addresses**

An IP address (Internet Protocol address) can be thought of as a unique identifier that is assigned to each device that is connected to the internet. It is a numerical label that is used to identify a specific device, and it is similar to a physical address or a phone number.

Imagine that a group of pirates are all connected to the same network, and they want to communicate with each other over the internet. In order to send messages to a specific pirate, they need to know the pirate's IP address. Just like how a physical address tells you where a house is located, an IP address tells you where a device is located on the internet.

IP addresses are usually assigned by internet service providers (ISPs) or network administrators, and they can be either static (meaning they never change) or dynamic (meaning they are assigned temporarily and can change over time).

You might imagine that each pirate has a unique IP address that they use to communicate with other pirates over the internet. They might also use IP addresses to access websites and other online resources, just like how people use IP addresses in the real world.

#### **What is an IP made up of?**

Ahoy matey! An IP address is a numerical label assigned to each device connected to a computer network that uses the Internet Protocol for communication. Just like how a pirate might use a map to navigate through the open seas, an IP address helps devices on a network find and communicate with each other.

An IP address consists of four numbers separated by periods, and each number can range from 0 to 255. For example, an IP address might look like this: 192.168.1.1

These four numbers represent different parts of the IP address, known as octets. Each octet is a group of 8 bits, and together, the four octets make up a 32-bit number.

The first octet is used to identify the network that the device is a part of. The remaining three octets are used to identify the specific device within that network.

There are two main versions of IP addresses in use today: IPv4 and IPv6. IPv4 is the most widely used version and uses 32-bit numbers, as described above. IPv6, on the other hand, uses 128-bit numbers and allows for a much larger number of unique IP addresses.

To understand an IP address, it's important to know the difference between a public and a private IP address. A public IP address is a unique address that is assigned to a device by an Internet Service Provider (ISP) and is used to identify the device on the Internet. A private IP address, on the other hand, is used to identify devices within a private network, such as a home or office network. Private IP addresses are not unique and are usually assigned by the router on the network.

I hope this helps you understand how IP addresses work and how a pirate might use them to navigate the vast ocean of the Internet. Arrr!

### **Latency**

Latency is the time it takes for a signal to travel from one point to another. In a pirate theme, you could think of latency as the time it takes for a message to travel from one pirate to another.

Latency is an important concept in computer networking, and it is often used to describe the time it takes for a packet of data to travel from one device to another. Latency is measured in milliseconds (ms), and it is usually measured using a tool called a ping.

Latency is an important metric to consider when designing a network, as it can affect the performance of applications and services. For example, if a user is experiencing high latency, they may experience slow loading times or poor video quality when streaming a video.

Latency can also be affected by the distance between two devices, as well as the type of network connection that is being used. For example, a wireless connection will typically have higher latency than a wired connection.

### **Logging**

Logging on a Linux system can be thought of as a way for pirates to keep track of what is happening on their network. Logging is the process of recording events and activities that occur on a computer system, and it is a useful tool for diagnosing problems, tracking changes, and detecting security breaches.

On a Linux system, logging is typically managed by a program called syslog. Syslog is a system daemon that collects and stores log messages from various sources, such as the operating system, applications, and network devices. The syslog daemon writes the log messages to a file or sends them to a remote server, where they can be accessed and analyzed by the pirates.

There are several different types of log messages that can be recorded on a Linux system, including system logs, application logs, and security logs. System logs contain information about the operating system and system-level events, such as system startup and shutdown, kernel messages, and system errors. Application logs contain information about specific applications and their activities, such as user actions and error messages. Security logs contain information about security-related events, such as failed login attempts and system access.

Logging can be a useful tool for pirates to monitor their network and keep track of what is happening on their systems. It can help them identify problems, track changes, and detect security breaches, all of which are important for keeping their network running smoothly and securely.

#### **Logrotate**

Logrotate is a utility that can be used to manage log files on a Linux system. It can be used to rotate, compress, and remove log files, as well as send log files to a remote server.

Logrotate is typically configured using a configuration file called logrotate.conf, which is located in the /etc/logrotate.d directory. This file contains a list of log files that should be rotated, as well as the rotation schedule and other options.

Logrotate can be used to rotate log files on a daily, weekly, monthly, or yearly basis. It can also be used to compress log files, which can help to save disk space. Logrotate can also be used to remove old log files, which can help to keep the system clean and organized.

### **Monitoring**

Monitoring on a Linux system can be thought of as a way for pirates to keep track of the performance and status of their systems. Monitoring is the process of collecting and analyzing data about a system's resources and activities, and it is a useful tool for identifying problems, optimizing performance, and detecting security breaches.

There are many different tools and techniques that can be used to monitor a Linux system, including:

**System logs:** Pirates can use system logs to keep track of events and activities that occur on their system. System logs contain information about the operating system, applications, and network devices, and they can be used to identify problems, track changes, and detect security breaches.

**System utilities:** Pirates can use system utilities such as top, ps, and free to monitor the performance of their system in real-time. These utilities can provide information about the CPU, memory, and disk usage of their system, as well as the processes that are running.

**Network monitoring:** Pirates can use tools such as netstat and tcpdump to monitor the network traffic on their system. These tools can provide information about the packets that are being transmitted and received, as well as the status of network connections.

Monitoring can be a useful tool for pirates to keep their systems running smoothly and securely. It allows them to identify problems, optimize performance, and detect security breaches, all of which are important for maintaining a healthy and efficient network.

### **Streaming**

You could think of streaming as a way for pirates to continuously receive updates and information from other ships as they sail the seas of the internet.

In software engineering, streaming refers to the process of continuously transmitting data from a server to a client, or vice versa, without the need to download and save the entire dataset upfront. This allows the client to receive and process the data as it is being transmitted, rather than waiting for the entire dataset to be transferred before beginning to process it.

Streaming is commonly used for media, such as music and video, but it can also be used for other types of data, such as financial data or social media updates. It allows users to access and process large amounts of data in real-time, rather than having to wait for it to be transferred and stored locally.

Streaming can be implemented using a variety of technologies and protocols, such as HTTP streaming, WebSockets, and WebRTC. It is an important part of modern software engineering, and is a valuable tool for pirates as they navigate the choppy waters of the internet. Arrr!

## **Chapter Three: Your first day as a pirate**

We are going to get a little bit hands on here. We are going to create a new project and we are going to create a new file. We are going to call this file `index.html`. We are going to open this file in our text editor. We are going to add some HTML to this file. We are going to save this file. We are going to open this file in our browser. We are going to see the result of our work. We are going to be very happy. We are going to celebrate. We are going to go to the pub. We are going to have a drink. We are going to have a good time. We are going to be pirates.

Just kidding. Although that is a great way to start, we should do a little bit more than that.

1. **Setting Sail:** It be time to set sail! In the terminal, try using the `ls` command to list the files and directories in the current directory, and the `cd` command to navigate to different directories. Can ye find yer way to the ship's hold?

2. **Finding Yer Way Home:** After a long voyage, it be nice to have a place to call home. In the terminal, try using the `echo` command to print out yer home directory, and the `cd` command to navigate to it. Can ye find a way to create a new directory and move a file into it?

3. **Managing Yer Crew:** A good captain be able to manage their crew and keep track of who be on board. In the terminal, try using the `whoami` command to see what user ye be logged in as, and the `groups` command to see what groups ye be a member of. Can ye find out who else be on board the ship?

4. **Navigating the Seas:** No voyage be complete without a good map! In the terminal, try using the `man` command to read the documentation for different commands and learn how to use them. Can ye find out how to use the `grep` command to search for a specific word in a file?

5. **Arranging Yer Crew:** A captain be nothing without a well-organized crew. In the terminal, try using the `sort` command to sort a list of names, and the `uniq` command to remove duplicates. Can ye find a way to count the number of unique names in the list?

6. **Setting Up Anchor:** When it be time to rest, ye need to know how to set anchor. In the terminal, try using the `touch` command to create a new file, and the `rm` command to delete a file. Can ye find a way to rename a file?

7. **Sending Messages in a Bottle:** When ye be out at sea, ye need to find ways to communicate with the rest of the world. In the terminal, try using the `mail` command to send a message to yerself or another user on the ship. Can ye find out how to attach a file to the message?

8. **Finding Yer Way Around the Ship:** The first thing ye need to do is get yer bearings and learn how to navigate around the ship. In the terminal, try using the `pwd` command to see what directory ye be in, and the `ls` command to see what files and directories be in that directory. Can ye find yer way to the main deck?

9. **Raising the Anchor:** When it be time to set sail again, ye need to know how to raise anchor. In the terminal, try using the `chmod` command to change the permissions on a file or directory, and the `chown` command to change the owner of a file or directory. Can ye find a way to change the group ownership of a file or directory?

10. **Sending Signals:** When ye need to get someone's attention, ye need to know how to send a signal. In the terminal, try using the `kill` command to send a signal to a running process, and the `ps` command to list the processes running on the ship. Can ye find a way to stop a process from running?

### **Common problems**

Here are a few examples of common problems you might face when working with Linux, along with some possible solutions in a pirate theme:

1. **The Ship Be Sinking!:** Ye be working on yer code, when all of a sudden ye see a message saying "out of memory." This be a problem because yer ship doesn't have enough memory to run all the programs ye be trying to use. To fix this problem, ye can try closing some programs or processes that be using a lot of memory, or ye can try adding more memory to yer ship.

2. **The Ship Be Adrift!:** Ye be trying to run a program, but ye keep getting a message saying "command not found." This be a problem because yer ship doesn't know where to find the program ye be trying to run. To fix this problem, ye can try using the which command to see where the program be installed, or ye can try adding the directory where the program be installed to yer PATH environment variable.

3. **The Ship Be Under Attack!:** Ye be working on yer code, when all of a sudden ye see a message saying "permission denied." This be a problem because yer ship be trying to access a file or directory that ye don't have permission to access. To fix this problem, ye can try using the chmod command to change the permissions on the file or directory, or ye can try using the sudo command to run the program as the superuser.

4. **The Ship Be Taking on Water!:** Ye be working on yer code, when all of a sudden ye see a message saying "disk full." This be a problem because yer ship's hard drive be full and ye don't have any more space to store yer files. To fix this problem, ye can try deleting some files that ye don't need anymore, or ye can try adding a new hard drive to yer ship.

I hope these examples give ye an idea of some common problems ye might face when working with Linux, and how ye might go about solving them.

### **Initiation**

Ye be now ready to begin yer journey as a Linux pirate! Ye can start by reading the rest of this book, or ye can try some of the challenges below.

#### **Question 1: Arrrrrgh**

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

#### **Question 2: The Black Pearl**

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

#### **Question 3: The Flying Dutchman**

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

#### **Question 4: Operation Blackbeard**

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

### **Is it YAML or YML?**

Both `.yml` and `.yaml` are file extensions for files written in the YAML (YAML Ain't Markup Language) format. YAML is a human-readable data serialization language that is often used for configuration files, but it can also be used to store and transmit data in a variety of applications.

The `.yml` and `.yaml` extensions are interchangeable, so you can use either one. Some people prefer to use `.yaml` because the .yml extension is often used for YAML configuration files in the Ruby on Rails framework, and the `.yaml` extension helps to indicate that the file is a YAML file, rather than a Ruby file. However, either extension will work for a YAML file.

## **Chapter 5: Ruby on Rails and the Seven Seas**

![Ruby on Rails](images/rubyonrails.png)

Ruby on Rails be a web application framework that be designed to make it easier to build web applications. It be written in the Ruby programming language, and be based on the Model-View-Controller (MVC) software design pattern. It be also known for its high level o' customization and ease o' use.

## **A stern warning: The dangers of the high seas**

![Pirate Circada](images/piratecircada.png)

"Ahoy, mateys! Ye be warned, the circadas be a-singin' their song o' prime numbers. Ye can hear them all through the night, marking their time with the beat of their wings. But beware, for those numbers be the key to unlockin' treasure beyond yer wildest dreams. So set sail and follow the siren call o' the circadas, and ye may just find yerself a rich pirate indeed.

Are ye ready for a riddle that'll make ye scratch yer head and laugh yer head off?

**Here goes:**

"I be a five-digit number, ye see, With a 6 in the middle, as plain as can be. But when ye multiply me, ye best be aware, For I be the product of length times width, I swear.

So if ye be wantin' to know my true form, Ye'll need to figure out my length and my width, I warn. But take heart, me hearty, for I'll give ye a clue, I be a multiple of 6, that much is true.

So put on yer thinkin' cap and give it a try, And maybe, just maybe, ye'll figure out why I be the answer to this little game, And the product of length times width, all the same.

And remember, to fully solve this riddle and claim yer treasure, ye'll need to think outside the box and find the hidden key. It's not as obvious as it seems."

## **Jokes**

I'm not sure where to put this yet, but here they are.

**Why couldn't the pirate get on the WiFi?** Because it kept saying "Yo ho ho and a password!"

**Why did the pirate's computer crash?** He forgot to set sail the anti-virus.

**Why did the pirate cross the road?** To booty-fy his system.

**How do pirates debug their code?** With a treasure map.

**What do you get when you cross a pirate and a computer programmer?** A scurvy code monkey.

**Why did the pirate's laptop have a wooden leg?** It was running Windows 95.

**Why was the pirate's computer always cold?** It left its Windows open.

**What do you get when you cross a pirate with a network administrator?** A router buccaneer.

**Why did the pirate switch to Linux?** He heard it was more stable than Windows and less buggy than MacOS.

**Why did the pirate buy a new computer?** His old one was starting to lag behind.

**Why couldn't the pirate connect to the Internet?** He had a sinking modem.

**Why did the pirate upgrade his operating system?** He heard it was the only way to get Windows on the Ark.

**What do you get when you cross a pirate with a database administrator?** A swashbuckling SQL pirate.

**Why did the pirate's computer never crash?** He had a solid-state drive.

**Why did the pirate's website always crash?** He used too many iframes.

### Check Yer Deployments

A group of pirates were setting sail on a new adventure, but they quickly ran into trouble. The ship's DevOps pirate had accidentally deployed the anchor instead of the sails, and they were stuck in the harbor.

The captain, a seasoned veteran of the high seas, knew they needed to act fast. "We need to redeploy the sails and set sail immediately," he yelled. "But how are we going to do that with the anchor deployed?" asked the devops pirate, frantically trying to fix the mistake.

"Leave that to me," replied the captain, pulling out his trusty sword. "I'll just cut the anchor's deployment pipeline and redeploy the sails manually." And with a mighty swing, he severed the anchor's deployment pipeline and the ship was finally on its way.

From then on, the DevOps pirate made sure to double check his deployments before setting sail. And the rest of the crew lived happily ever after, sailing the seas and deploying their sails with ease.

## **Testemonials**

**Linus Torvalds:** "As the creator of the Linux kernel, I can confidently say that pirating software is a big no-no. But if I were a pirate, I'd have to say that Dean Lofts' book "Linux for Pirates" would be my go-to guide for all things pirate- and Linux-related. Dean may not be as seasoned a pirate as Captain Jack Sparrow, but he sure knows his stuff when it comes to Linux. And let's be honest, a little bit of clever hacking never hurt anyone in a fight against the Royal Navy."

**Richard Stallman:** "As a strong advocate for free software, I can't condone piracy in any form. However, if I had to choose a resource for learning about Linux and pirating, it would have to be Dean Lofts' book "Linux for Pirates!". Dean may not be as ruthless a pirate as Captain Jack Sparrow, but he's certainly got a way with words and a wicked sense of humor. Plus, his book is chock full of useful information for pirates looking to make the most of their Linux systems."

**Captain Jack Sparrow:** "Ahoy there, mateys! As a seasoned pirate, I can tell ye that there's no one I'd rather have by my side in a fight than Linus Torvalds and Richard Stallman. And when it comes to learning about Linux and pirating, Dean Lofts' book "Linux for Pirates!" is a must-read. Dean may not have as much experience on the high seas as I do, but he sure knows his way around a Linux system. So hoist the sails and let's set a course for adventure, with Dean's book as our guide!"

> **Note** These are not real tersemonials, but they could be if you want them to be bad enough.

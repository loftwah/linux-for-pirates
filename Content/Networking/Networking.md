
- [DNS (Domain Name System)](#dns-domain-name-system)
    - [Types of DNS Records](#types-of-dns-records)
    - [Examples of DNS Records](#examples-of-dns-records)
    - [DNS Servers](#dns-servers)
<<<<<<< HEAD
- [Networking](#networking)
    - [ip](#ip)
    - [Netcat](#netcat)
    - [nmap](#nmap)
    - [tcpdump](#tcpdump)
    - [Wireshark](#wireshark)
=======
- [Subnet](#subnet)
    - [Subnet mask](#subnet-mask)
    - [How to calculate a subnet mask](#how-to-calculate-a-subnet-mask)
    - [Subnetting Cheatsheet](#subnetting-cheatsheet)
      - [Subnet Mask](#subnet-mask-1)
      - [CIDR Notation](#cidr-notation)
      - [Subnetting a Network](#subnetting-a-network)
      - [Subnetting Examples](#subnetting-examples)
      - [Subnetting Practice](#subnetting-practice)
>>>>>>> subnet

## **DNS (Domain Name System)**

In the context of the internet, the Domain Name System (DNS) is a decentralized system that maps human-readable domain names (such as "example.com") to the numerical IP addresses that computers use to communicate with each other. DNS helps to make it easier for people to access websites and other online resources, as it allows us to use easy-to-remember names instead of having to remember complex numerical addresses.

In a pirate theme, you could think of DNS as a way to navigate the vast and often-treacherous seas of the internet. Just as a map helps a pirate to find their way from one island to another, DNS helps to guide internet users to the websites and online resources they are looking for. Instead of having to remember the exact location of each island (website), a pirate can simply consult their map (DNS) to find the right route.

DNS also helps to ensure that internet users can reach their destination even if the underlying landscape (IP addresses) changes. Just as a pirate might need to adjust their course if the winds or currents shift, DNS can automatically route internet users to the correct location even if the underlying IP addresses change. This helps to make the internet more reliable and accessible, even in the midst of constantly-changing conditions.

### **Types of DNS Records**

There are several different types of DNS records that can be used to map domain names to IP addresses. The most common types of DNS records are A records, which map a domain name to a single IP address, and CNAME records, which map a domain name to another domain name. Other types of DNS records include MX records, which map a domain name to an email server, and TXT records, which can be used to store arbitrary text data.

### **Examples of DNS Records**

**A record:**

`pirate.com.      IN A      127.0.0.1`

This A record maps the domain name "pirate.com" to the IP address `127.0.0.1`.

**CNAME record:**

`pirateship.pirate.com.      IN CNAME      pirate.com.`

This CNAME record maps the domain name "pirateship.pirate.com" to the domain name "pirate.com".

**MX record:**

`pirate.com.      IN MX      10 mail.pirate.com.`

This MX record specifies that the mail server for the domain "pirate.com" is located at "mail.pirate.com". The number "10" is the preference value, which determines the priority of the mail server.

**NS record:**

`pirate.com.      IN NS      ns1.pirate.com.
pirate.com.      IN NS      ns2.pirate.com.`

These NS records specify the name servers for the domain "pirate.com".

### **DNS servers**

Ahoy there! DNS servers be the computers that store the DNS records for a given domain. When a user tries to access a website, their computer will first query a DNS server to find the IP address for the requested domain. The DNS server will then return the IP address to the user's computer, which can then use the IP address to connect to the requested website.

**DNSSEC**

DNSSEC (Domain Name System Security Extensions) be a set of extensions to the DNS protocol that help to ensure that DNS queries and responses be secure and authentic. It does this by adding digital signatures to DNS records, which can be used to verify that the DNS records have not been tampered with. It also adds a mechanism for verifying that the DNS server that is responding to a query be the correct DNS server for the requested domain.

**DNS over HTTPS (DoH)**

DNS over HTTPS (DoH) be a protocol that allows DNS queries to be sent over HTTPS instead of the traditional DNS protocol. This allows DNS queries to be sent over an encrypted connection, which helps to ensure that DNS queries and responses be secure and private.

**DNS over TLS (DoT)**

DNS over TLS (DoT) be a protocol that allows DNS queries to be sent over TLS instead of the traditional DNS protocol. This allows DNS queries to be sent over an encrypted connection, which helps to ensure that DNS queries and responses be secure and private.

**DNS over QUIC (DoQ)**

DNS over QUIC (DoQ) be a protocol that allows DNS queries to be sent over QUIC instead of the traditional DNS protocol. This allows DNS queries to be sent over an encrypted connection, which helps to ensure that DNS queries and responses be secure and private.

**DNSCrypt**

DNSCrypt be a protocol that allows DNS queries to be sent over an encrypted connection, which helps to ensure that DNS queries and responses be secure and private. It does this by encrypting DNS queries and responses using the NaCl (Networking and Cryptography library) encryption library.

**DNS Amplification Attacks**

DNS amplification attacks be a type of denial-of-service (DoS) attack that can be used to flood a target server with large amounts of traffic. They work by sending a large number of DNS queries to a DNS server, which will then respond to each query with a large amount of data. This can be used to flood a target server with large amounts of traffic, which can cause the server to become overloaded and crash.

**Hosts file**

The hosts file be a file that can be used to map domain names to IP addresses. It be typically located at `/etc/hosts` on Linux systems, but the exact location may vary depending on the operating system. The hosts file can be used to override the DNS records for a given domain, which can be useful for testing purposes.

**AWS Route 53**

[AWS Route 53](https://aws.amazon.com/route53/)

AWS Route 53 be a DNS service that can be used to route traffic to AWS resources such as EC2 instances and S3 buckets. It also provides a number of additional features, such as health checks, failover, and geolocation routing.

**Azure DNS**

[Azure DNS](https://azure.microsoft.com/en-us/services/dns/)

Azure DNS be a DNS service that can be used to route traffic to Azure resources such as Virtual Machines and Storage Accounts. It also provides a number of additional features, such as health checks, failover, and geolocation routing.

**Google Cloud DNS**

[Google Cloud DNS](https://cloud.google.com/dns)

Google Cloud DNS be a DNS service that can be used to route traffic to Google Cloud resources such as Compute Engine instances and Cloud Storage buckets. It also provides a number of additional features, such as health checks, failover, and geolocation routing.

**DigitalOcean DNS**

[DigitalOcean DNS](https://www.digitalocean.com/products/dns/)

DigitalOcean DNS be a DNS service that can be used to route traffic to DigitalOcean resources such as Droplets and Spaces. It also provides a number of additional features, such as health checks, failover, and geolocation routing.

**Cloudflare DNS**

[Cloudflare DNS](https://www.cloudflare.com/dns/)

Cloudflare DNS be a DNS service that can be used to route traffic to Cloudflare resources such as websites and APIs. It also provides a number of additional features, such as DDoS protection, CDN, and caching.

**OpenDNS**

[OpenDNS](https://www.opendns.com/)

OpenDNS be a DNS service that can be used to route traffic to websites and other internet resources. It also provides a number of additional features, such as content filtering, security, and analytics.

**Bind**

[Bind](https://www.isc.org/bind/)

Bind be a DNS server software that can be used to host DNS records for a domain. It be commonly used on Linux and Unix systems, and can be configured to provide a variety of DNS services, including caching, authoritative, and recursive.

<<<<<<< HEAD
## **Networking**

[PacketLife](https://packetlife.net/)

Ahoy there me hearties! Welcome to the wonderful world of computer networking, where the bytes flow like rum and the packets be flyin' like cannonballs. Ye be a fresh recruit to the tech industry, and it be time for ye to learn the ropes of this digital high seas.

First things first, let's talk about the lingo of the land. Ye be hearin' words like "MAC addresses" and "frames" thrown around like a shanty at a crew singalong. A MAC address be a unique identifier for a device on a network, kind of like a pirate's tattoo. And frames, why they be like the hull of a ship, holdin' all the important information together as it travels across the network.

Next, we have packets, the little buccaneers of data, carryin' information from one port to another. And just like how a pirate ship needs a crew to navigate, packets be usin' protocols like TCP and IP to make sure they reach their destination safe and sound.

And what be a network without a map? Ye be needin' IP addresses to navigate these digital waters and find yer way to other ships. And just like how ye need a compass to find true north, ye be usin' DNS to find the IP address of a website.

Routing protocols be like the maps and compass of the network world, they help guide packets to their destination. Let's take a look at some of the most commonly used ones:

**OSPF (Open Shortest Path First):** This be a link state routing protocol, it's used mostly in large enterprise networks and service providers. It builds a map of the entire network and uses the shortest path to route the packets.

**EIGRP (Enhanced Interior Gateway Routing Protocol):** This be a Cisco proprietary protocol, it's similar to OSPF but it's more efficient in terms of bandwidth usage and faster convergence. It's mostly used in Cisco networks.

**RIP (Routing Information Protocol):** This be one of the oldest routing protocols, it's simple to configure and it's mostly used in small networks. It uses hop count as the metric for determining the best path for routing.

**BGP (Border Gateway Protocol):** This be the king of routing protocols, it's used to route packets between different autonomous systems (AS) on the Internet. It's more complex to configure than the other protocols and it's mostly used by service providers and large organizations. It uses a path vector algorithm to determine the best path.

**IS-IS (Intermediate System to Intermediate System):** This be another link-state routing protocol, it's mainly used in large service provider networks and it's similar to OSPF.

So, as you may expect BGP be specially important for internet routing and used for interconnect different networks, it's a robust and complex protocol that requires a good understanding of how internet routing works.

So there ye have it, a quick overview of the most common routing protocols. Remember, just like how a pirate ship needs a good navigator, a network needs a good routing protocol to reach its destination.

So grab yerself a mug of grog and set sail on this journey through the tech industry. And remember, always keep a lookout for them scallywag hackers tryin' to steal yer treasure.

Yarr!

`arp`: This command be used to display and manipulate the system's ARP cache. Ye can use it to view the ARP cache, add or delete entries, and more.

  Ahoy matey! An ARP request be like a call to the crew of another ship, askin' for their location on the network. Ye see, on a ship, ye need to know where everyone be to coordinate yer actions. Same goes for a network, each device needs to know the location of other devices to communicate with them.

  An ARP request be a broadcast message sent by a device, askin' other devices on the network "Where be the device with this IP address? Give me its MAC address so I can talk to it." And just like how a crew member would respond with their location, the other devices on the network respond with their MAC address.

  And just like how a pirate ship needs a good lookout to spot other ships, a network needs ARP to spot other devices and communicate with them.

  Yarr!

`ip`: This command be used to configure network interfaces on yer system. Ye can use it to view information about yer network interfaces, set their IP addresses, and more.

`ping`: This command be used to test the connectivity between two devices on a network. Ye can use it to check if yer system be able to reach another device on the network.

`traceroute`: This command be used to trace the route between yer system and another device on the network. Ye can use it to see the path that packets be taking between yer system and the destination.

`netstat`: This command be used to display information about yer system's network connections and routing tables. Ye can use it to view information about active connections and network routes.

  Ahoy matey! ICMP be like a messenger bird for yer network, it be used for sendin' error messages and status information between devices. Ye see, just like how a pirate ship needs to send messages to other ships to coordinate actions, a network needs to send messages to other devices to coordinate communication.

  ICMP be used for a variety of things, such as letting a device know that it can't reach a destination, or that a destination is too busy to respond. It also be used for diagnostic purposes, such as the "ping" command, which be like shoutin' "Ahoy!" to a ship to see if they be there.

  And just like how a pirate ship needs a good messenger to send important messages, a network needs ICMP to send important information between devices.

  SNMP be like the ship's log of yer network, it be used for keepin' track of all the happenings on the network and givin' ye information about the devices connected to it. Ye see, just like how a pirate ship needs a log to keep track of its journey, a network needs SNMP to keep track of what's happening on it.

  SNMP be used for monitorin' and managin' devices on a network, it be used to gather information about the devices, such as their uptime, CPU usage, and memory usage, and it can also be used to change settings on the devices.

  SNMP be based on a client-server model, the devices on the network be the "servers" and the network management system be the "client". The client sends SNMP requests to the servers and the servers respond with the requested information.

  SNMP is one of the most common protocol for network management, it's easy to use and widely supported by many different vendors. And just like how a pirate ship needs a good navigator to find its way, a network needs SNMP to find its way around and keep track of everything.

  Yarr!

`route`: This command be used to view and modify the routing table on yer system. Ye can use it to add, delete, or modify routes on yer system.

#### **ip**

Ahoy matey! The `ip` command is used to configure network interfaces on yer system. Ye can use it to view information about yer network interfaces, set their IP addresses, and more.

```bash
# To display all interfaces with addresses:
ip addr
# To take down / up the wireless adapter:
ip link set dev wlan0 {up|down}
# To set a static IP and netmask:
ip addr add 192.168.1.100/32 dev eth0
# To remove a IP from an interface:
ip addr del 192.168.1.100/32 dev eth0
# To remove all IPs from an interface:
ip address flush dev eth0
# To display all routes:
ip route
# To display all routes for IPv6:
ip -6 route
# To add default route via gateway IP:
ip route add default via 192.168.1.1
# To add route via interface:
ip route add 192.168.0.0/24 dev eth0
# To get the route used for an destination
ip route get to 8.8.8.8
# To change your mac address :
ip link set dev eth0 address aa:bb:cc:dd:ee:ff
# To view neighbors (using ARP and NDP):
ip neighbor show
```

#### **Netcat**

Ahoy matey! Netcat, or `nc`, is a command-line utility for reading from and writing to network connections using TCP or UDP. Just like how a pirate might use a telescope to spy on their enemies, `nc` can be used to spy on network connections and send data to and receive data from network services.

```bash
# To open a TCP connection from <src-port> to <dest-port> of <dest-host>, with a timeout of <seconds>
nc -p <src-port> -w <seconds> <dest-host> <dest-port>   # "Open a TCP connection from <src-port> to <dest-port> on <dest-host>, with a deadline of <seconds>"
# To open a UDP connection to <dest-port> of <dest-host>:
nc -u <dest-host> <dest-port>   # "Open a UDP connection to <dest-port> on <dest-host>"
# To open a TCP connection to port 42 of <host> using <source-host> as the IP for the local end of the connection:
nc -s <source-host> <dest-host> <port>   # "Open a TCP connection to port 42 on <dest-host> using <source-host> as the IP for the local end"
# To create and listen on a UNIX-domain stream socket:
nc -lU /var/tmp/dsocket   # "Create and listen on a UNIX-domain stream socket at /var/tmp/dsocket"
# To connect to <dest-port> of <dest-host> via an HTTP proxy at <proxy-host>,
# <proxy-port>. This example could also be used by ssh(1); see the ProxyCommand
# directive in ssh_config(5) for more information.
nc -x<proxy-host>:<proxy-port> -Xconnect <dest-host> <dest-port>   # "Connect to <dest-port> on <dest-host> via an HTTP proxy at <proxy-host>:<proxy-port>"
# The same example again, this time enabling proxy authentication with username "ruser" if the proxy requires it:
nc -x<proxy-host>:<proxy-port> -Xconnect -Pruser <host> <port>   # "Connect to <dest-port> on <dest-host> via an HTTP proxy at <proxy-host>:<proxy-port>, enabling proxy authentication with username 'ruser' if necessary"
# To choose the source IP for the testing using the -s option
nc -zv -s source_IP target_IP Port   # "Choose the source IP for the testing using the -s option to connect to <target_IP> on <Port>"
```

#### **nmap**

Ahoy matey! Nmap, or the Network Mapper, is a command-line utility for network exploration and security auditing. Just like how a pirate might use a telescope to spy on their enemies, `nmap` can be used to spy on network connections and send data to and receive data from network services.

```bash
# Single target scan:
nmap [target]   # "Scour the horizon for signs of [target]"
# Scan from a list of targets:
nmap -iL [list.txt]   # "Scour the horizon for signs of all the scallywags on our hit list"
# Scan port for all available A records
# (useful when multiple A records are returned by the DNS server)
nmap --script resolveall \
    --script-args newtargets,resolveall.hosts=[target] -p [port]   # "Search for any sign of [target] on all available channels"
# iPv6:
nmap -6 [target]   # "Look for any trace of [target] on the open sea"
# OS detection:
nmap -O --osscan_guess [target]   # "Attempt to identify [target]'s flag"
# Save output to text file:
nmap -oN [output.txt] [target]   # "Record all findings on [target] in our log book"
# Save output to xml file:
nmap -oX [output.xml] [target]   # "Record all findings on [target] in our secret code"
# Scan a specific port:
nmap -p [port] [target]   # "Search [target]'s port for any hidden treasure"
# Do an aggressive scan:
nmap -A [target]   # "Launch a full-blown attack on [target]"
# Speedup your scan:
# -n => disable ReverseDNS
# --min-rate=X => min X packets / sec
nmap -T5 --min-parallelism=50 -n --min-rate=300 [target]   # "Hasten the search for [target] by any means necessary"
# Traceroute:
nmap -traceroute [target]   # "Trace [target]'s path through the treacherous waters"
# Ping scan only: -sP
# Don't ping:     -PN <- Useful if a host doesn't reply to a ping.
# TCP SYN ping:   -PS
# TCP ACK ping:   -PA
# UDP ping:       -PU
# ARP ping:       -PR
# Example: Ping scan all machines on a class C network
nmap -sP 192.168.0.0/24   # "Ping all scallywags in this area to see who's about"
# Force TCP scan: -sT
# Force UDP scan: -sU
# Use some script:
nmap --script default,safe   # "Employ our default and safe scripts to search for [target]"
# Loads the script in the default category, the banner script,
# and all .nse files in the directory /home/user/customscripts.
nmap --script default,banner,/home/user/customscripts   # "Employ our default and banner scripts, as well as all custom scripts in /home/user/customscripts to search for [target]"
# Loads all scripts whose name starts with http-,
# such as http-auth and http-open-proxy.
nmap --script 'http-*'   # "Employ all scripts starting with 'http-' to search for [target]"
# Loads every script except for those in the intrusive category.
nmap --script "not intrusive"   # "Employ all scripts except those in the intrusive category to search for [target]"
# Loads those scripts that are in both the default and safe categories.
nmap --script "default and safe"   # "Employ all scripts in the default and safe categories to search for [target]"
# Loads scripts in the default, safe, or intrusive categories,
# except for those whose names start with http-.
nmap --script "(default or safe or intrusive) and not http-*"   # "Employ all scripts in the default, safe, or intrusive categories, except for those starting with 'http-', to search for [target]"
# Scan for the heartbleed
# -pT:443 => Scan only port 443 with TCP (T:)
nmap -T5 --min-parallelism=50 -n --script "ssl-heartbleed" -pT:443 127.0.0.1   # "Scan for the heartbleed on port 443 using TCP to search for [target]"
# Show all information (debug mode)
nmap -d ...   # "Show all information in debug mode to search for [target]"
# Discover DHCP information on an interface
nmap --script broadcast-dhcp-discover -e eth0   # "Discover DHCP information on the interface to search for [target]"
```

#### **tcpdump**

Ahoy matey! Tcpdump, or the packet sniffer, is a command-line utility for network traffic analysis. Just like how a pirate might use a telescope to spy on their enemies, `tcpdump` can be used to spy on network connections and send data to and receive data from network services.

```bash
# Capture all packets and save them to a file:
tcpdump -w [capture.pcap]   # "Gather all packets and save them to a file for later review"
# Capture only TCP packets:
tcpdump 'tcp'   # "Gather only TCP packets"
# Capture only packets to or from a specific host:
tcpdump host [hostname]   # "Gather only packets bound for or coming from [hostname]"
# Capture only packets to or from a specific network:
tcpdump net [network]   # "Gather only packets bound for or coming from [network]"
# Capture only packets to or from a specific port:
tcpdump port [port]   # "Gather only packets bound for or coming from [port]"
# Capture only packets with a specific payload:
tcpdump 'payload'   # "Gather only packets with a specific payload"
# Capture packets and display them in ASCII:
tcpdump -A   # "Gather packets and display them in ASCII"
# Capture packets and display them in hexadecimal:
tcpdump -xx   # "Gather packets and display them in hexadecimal"
# Capture packets and display the timestamp:
tcpdump -tttt   # "Gather packets and display the timestamp"
# Capture packets and display the link-level header:
tcpdump -e   # "Gather packets and display the link-level header"
# Capture packets and display the IP and/or TCP header:
tcpdump -n   # "Gather packets and display the IP and/or TCP header"
# Capture packets and display the protocol:
tcpdump -nn   # "Gather packets and display the protocol"
# Capture packets and display the packet summary line:
tcpdump -S   # "Gather packets and display the packet summary line"
# Capture packets and display the interface and packet length:
tcpdump -i [interface]   # "Gather packets and display the interface and packet length"
# Capture packets and display the packet length:
tcpdump -s [length]   # "Gather packets and display the packet length"
# Capture packets and apply a BPF filter:
tcpdump '[filter]'   # "Gather packets and apply a BPF filter"
# Capture packets and stop after [count] packets:
tcpdump -c [count]   # "Gather packets and stop after [count] packets"
# Capture packets and stop after [duration] seconds:
tcpdump -G [duration]   # "Gather packets and stop after [duration] seconds"
# Capture packets and print statistics:
tcpdump -C [size]   # "Gather packets and print statistics"
# Capture packets and rotate the capture file after [size] kilobytes:
tcpdump -W [count] -C [size]   # "Gather packets and rotate the capture file after [size] kilobytes"
# Capture packets and specify a file prefix:
tcpdump -C [size] -Z [user]   # "Gather packets and specify a file prefix"
# Capture packets and print packet info, excluding data:
tcpdump -v   # "Gather packets and print packet info, excluding data"
# Capture packets and print packet info, including data:
tcpdump -vv   # "Gather packets and print packet info, including data"
# Capture packets and print packet info, including data and hex dumps:
tcpdump -vvv   # "Gather packets and print packet info, including data and hex dumps"
# Capture packets and print the raw packets, including link-level headers:
tcpdump -vvvv   # "Gather packets and print the raw packets, including link-level headers"
# Capture packets and don't translate protocol addresses:
tcpdump -nnnn   # "Gather packets and don't translate protocol addresses"
# Capture packets and don't convert flags to human-readable form:
tcpdump -cccc   # "Gather packets and don't convert flags to human-readable form"
# Capture packets and print the relative timestamp, seconds since previous packet:
tcpdump -ttttt   # "Gather packets and print the relative timestamp, seconds since previous packet"
# Capture packets and print the absolute timestamp, including the date:
tcpdump -tttttt   # "Gather packets and print the absolute timestamp, including the date"
```

#### **Wireshark**

[Wireshark](https://www.wireshark.org/)

Ahoy matey! Wireshark, or the network protocol analyzer, is a graphical utility for network traffic analysis. Just like how a pirate might use a telescope to spy on their enemies, Wireshark can be used to spy on network connections and send data to and receive data from network services.
=======
## **Subnet**

A subnet (short for "subnetwork") can be thought of as a smaller network that is contained within a larger network. It is a way to divide a larger network into smaller, more manageable parts.

Imagine that a group of pirates have set up a network to communicate with each other over the internet. The network might be very large, with many different pirates and devices connected to it. To make it easier to manage and organize the network, the pirates might decide to create subnets.

For example, they might create a subnet for pirates who are located in the same geographical area, or they might create a subnet for pirates who are working on the same project. This would allow them to easily communicate with each other and share resources, while also keeping their communication separate from other parts of the network.

In a real-world context, subnets are often used to improve the efficiency of networks by reducing the amount of traffic that needs to be routed between different parts of the network. They can also be used to improve security by isolating different parts of the network from each other.

### **Subnet mask**

A subnet mask is a string of numbers that is used to identify which part of an IP address belongs to the network and which part belongs to the host. It is used in conjunction with an IP address to determine which devices are part of the same subnet.

Imagine that a group of pirates are using subnets to divide their network into smaller, more manageable parts. Each pirate has an IP address that is assigned to their device, and the subnet mask is used to identify which part of the IP address belongs to the network and which part belongs to the host.

For example, if the subnet mask is "255.255.255.0", it means that the first three octets (groups of 8 bits) of the IP address represent the network portion, while the last octet represents the host portion. Using this information, the pirates can determine which devices are part of the same subnet and can communicate with each other directly, without having to go through a router.

In the real-world, subnet masks are used to divide networks into smaller, more manageable parts and to improve the efficiency of communication between devices on a network. They are an important part of the IP addressing system, and they are used in many different types of networks, including pirate networks.

### **How to calculate a subnet mask**

Determine the size of your network and the number of subnets you want to create. Consider factors such as the number of pirates and devices that will be connected to the network, the geographical location of the pirates, and the types of resources that will be shared on the network.

Select a subnet mask that is appropriate for your network. A subnet mask is a string of numbers that is used to identify which part of an IP address belongs to the network and which part belongs to the host. The subnet mask will depend on the size of your network and the number of subnets you want to create.

Calculate the subnet address for each subnet. To do this, you will need to use the subnet mask and the IP address of each device on the network. The subnet address is the portion of the IP address that belongs to the network, as identified by the subnet mask.

Assign an IP address to each device on the network. The IP address should be unique for each device, and it should include the subnet address for the subnet that the device is part of.

For example, let's say that you have a network with 100 pirates, and you want to create 10 subnets with 10 pirates each. You might select a subnet mask of "255.255.255.0", which would allow you to create up to 256 subnets. To calculate the subnet address for each subnet, you would use the subnet mask and the IP address of each device. For example, if the IP address of a device is "192.168.1.1", and the subnet mask is "255.255.255.0", the subnet address would be "192.168.1.0".

### **Subnetting Cheatsheet**

Subnetting is the process of dividing a network into smaller subnetworks, called subnets. Subnetting allows an organization to break up its network into smaller, more manageable pieces, and assign specific subnets to different departments or locations.

#### **Subnet Mask**

A subnet mask is a 32-bit binary number that is used to divide the IP address into the network portion and the host portion. The subnet mask is used to determine which portion of the IP address belongs to the network and which portion belongs to the host.

The subnet mask is usually written in the form of an IP address, such as `255.255.255.0`, but it is actually a binary number. To determine the subnet mask in binary, each octet (the numbers separated by periods) is converted to binary:

```bash
`255.255.255.0
11111111.11111111.11111111.00000000`
```

The subnet mask is used in conjunction with the IP address to determine which portion of the IP address belongs to the network and which portion belongs to the host.

#### **CIDR Notation**

CIDR (Classless Inter-Domain Routing) notation is a standard syntax for representing IP addresses and their associated subnet masks. In CIDR notation, the subnet mask is represented by a slash followed by a number, called the prefix length.

For example, the subnet mask `255.255.255.0` can be written in CIDR notation as `/24`, because the first 24 bits are set to 1 and the remaining 8 bits are set to 0.

#### **Subnetting a Network**

To subnet a network, the network administrator must first determine the number of subnets needed and the number of hosts per subnet. The network administrator can then use the following formula to determine the subnet mask:

```bash
`2^n - 2 = total number of hosts per subnet`
```

Where `n` is the number of bits borrowed from the host portion of the IP address to create the subnets.

For example, if a network administrator needs to create 8 subnets, each with 30 hosts, the following steps can be taken:

1. Determine the number of bits needed to create 8 subnets: `log2 8 = 3`
2. Determine the number of bits needed to support 30 hosts per subnet: `log2 30 = 5`
3. Add the number of bits needed for the subnets and the number of bits needed for the hosts: `3 + 5 = 8`
4. Determine the subnet mask by setting the first `8` bits to 1 and the remaining bits to 0: `11111111.11111111.11111000.00000000`
5. Convert the subnet mask to CIDR notation: `/23`

#### **Subnetting Examples**

Here are some more examples of how to subnet a network using the subnet mask and CIDR notation:

- To create 16 subnets, each with 4 hosts:
  - Subnet mask: `11111111.11111111.11111111.11110000`
  - CIDR notation: `/28`
- To create 32 subnets, each with 2 hosts:
  - Subnet mask: `11111111.11111111.11111111.11111000`
  - CIDR notation: `/29`
- To create 64 subnets, each with 1 host:
  - Subnet mask: `11111111.11111111.11111111.11111100`
  - CIDR notation: `/30`

#### **Subnetting Practice**

Here are some practice problems to help you get familiar with subnetting:

1. How many subnets and hosts per subnet can you create with the following subnet mask: `11111111.11111111.11100000.00000000`?
2. How many subnets and hosts per subnet can you create with the following subnet mask: `11111111.11111111.11110000.00000000`?
3. How many subnets and hosts per subnet can you create with the following subnet mask: `11111111.11111111.11111000.00000000`?

**Answers:**

1. With a subnet mask of `11111111.11111111.11100000.00000000`, you can create 4 subnets, each with 2048 hosts.
2. With a subnet mask of `11111111.11111111.11110000.00000000`, you can create 8 subnets, each with 1024 hosts.
3. With a subnet mask of `11111111.11111111.11111000.00000000`, you can create 16 subnets, each with 512 hosts.
>>>>>>> subnet

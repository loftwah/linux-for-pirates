
- [DNS (Domain Name System)](#dns-domain-name-system)
    - [Types of DNS Records](#types-of-dns-records)
    - [Examples of DNS Records](#examples-of-dns-records)
    - [DNS Servers](#dns-servers)
- [Subnet](#subnet)
    - [Subnet mask](#subnet-mask)
    - [How to calculate a subnet mask](#how-to-calculate-a-subnet-mask)
    - [Subnetting Cheatsheet](#subnetting-cheatsheet)
      - [Subnet Mask](#subnet-mask-1)
      - [CIDR Notation](#cidr-notation)
      - [Subnetting a Network](#subnetting-a-network)
      - [Subnetting Examples](#subnetting-examples)
      - [Subnetting Practice](#subnetting-practice)

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
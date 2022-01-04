+++
title = "SANS Foundations"
author = ["ksam"]
date = 2021-09-15
lastmod = 2022-01-04T15:21:58-05:00
draft = false
slug = "sans-foundations"
description = "Notes from SANS Foundations"
+++

## Intro to Computer Hardware {#intro-to-computer-hardware}


### Motherboard {#motherboard}

-   Sizes
-   Sockets
-   Buses


### CPU {#cpu}


### RAM {#ram}


### Storage {#storage}


### GPU {#gpu}


### Input {#input}

USB 1 - Transfer Speed: 1.5 Mbit/s
USB 2 - Transfer Speed: 480 Mbit/s
USB 3 - Transfer Speed: 4 Gbit/s (You can usually tell if a port is USB 3 compatible because the port will be coloured blue)
USB 3.1 - Transfer Speed: 10 Gbit/s (You can usually tell if a port is USB 3.1 compatible because the port will be coloured teal)


### Output {#output}


### Heat Sinks {#heat-sinks}


### Power {#power}


## Data Storage and Representation {#data-storage-and-representation}


### Bits and Bytes {#bits-and-bytes}


### Alternate Bases {#alternate-bases}


### Bionary {#bionary}


### Hex {#hex}


### ASCII {#ascii}


### Encoding {#encoding}


### Headers {#headers}


## Logic and Data Manipulation {#logic-and-data-manipulation}


### Boolean Logic {#boolean-logic}


### AND {#and}


### OR {#or}


### NOT {#not}


### NAND {#nand}


### NOR {#nor}


### XOR {#xor}


### XOR Encryption {#xor-encryption}


### Language {#language}

-   Tautology: Statement that is always true
-   Contradiction: Statement that is always false
-   Contingency: Neither a tautology nor a contradiction


## Storing Data and Files {#storing-data-and-files}


### File Systems {#file-systems}

-   Cluster: smallest unit to store a file in
-   waster space is slack space
-   file system's index tracks things
-


### FAT32 and exFAT {#fat32-and-exfat}


### NTFS {#ntfs}


### EXT3 & EXT4 {#ext3-and-ext4}


### HFS+ and APFS {#hfs-plus-and-apfs}


## Cloud Computing {#cloud-computing}


### SasS, IaaS, PaaS {#sass-iaas-paas}

-   SaaS: Software as a Service, least control, easiest to use
-   IaaS: Infrastructure as a Service, most control, least easy to use, usually using some specific tool
-   PaaS: Platform as a Service: more control, less easy to use, more configuration
    ![](/home/ksam/Downloads/SaaSIaaSPaaS.png)


### Manage {#manage}


## Operating Systems 1 {#operating-systems-1}


### Operating Systems {#operating-systems}


### The Kernel {#the-kernel}

-   First thing to be loaded
-   Has complete control
-   Loaded into a special part of memory


### The Process {#the-process}


### Interrupts {#interrupts}

-   Tells CPU to focus on a task right now


### BIOS, UEFI, Bootloaders {#bios-uefi-bootloaders}

-   BIOS: This is the first thing to load as soon as the computer turns on and loads the bootloader
-   UEFI (Unified Extensivle Firmware Interface): Successor to BIOS
-   Bootloader: Loads the OS


## Virtualization {#virtualization}


### What {#what}

-   Virtual comptuer made out of software


### Types {#types}

-   Type 2: Virtualization done at software level
-   Type 1: Virtualization done at firmware level (no Host OS)


### Uses {#uses}

-   Multiple scalable boxes
-   Security and isolation
-   Easy development environments


## Introduction to Linux {#introduction-to-linux}


## The Linux Environment {#the-linux-environment}

-   `su` switches users
-   `sudo` switches to root for the command by reading the **sudoers** file (can be edited with `visudo`)
-   permissions are user, group, everyone


## Linux Navigation {#linux-navigation}

-   `CTRL+L` clears terminal


## Linux Commands 1 {#linux-commands-1}

-   `cp`
-   `mkdir`
-   `mv`
-   `rm`
-   `cat`
-   `less`
-   `find`: `find . -name "name"`


## Linux Commands 2 {#linux-commands-2}


## Linux Architecture and Components {#linux-architecture-and-components}

-   `ps aux` shows processes
-   `kill -9 PID` kills process with said PID
-   **/etc/passwd** used to store hashes of user's passwords and the users themselves
-   If x is in **/etc/passwd**, then the hashes are actually in **/etc/shadow**
-   Edit crontab with `crontab -e`
-   Install with dpkg using `dpkg -i *.deb`
-   Install rpm using `rpm i *.rpm`


## Search Superpowers {#search-superpowers}

-   Google uses `site:` and `filetype:` commands for filtering
-   quotes find that specific phrase


## WWW and Serving {#www-and-serving}

-   HTTP requests include GET (retrieve), HEAD (retrieve but no body), POST (send data), PUT (send data to place), DELETE (remove)
-   HTTP/2 reworked it, compressed headers, and made thing generally more efficient but more complex by switching awat from plain text


## Networking 1 {#networking-1}

-   TCP waits for confirmation and resends dropped packets, but in situation dropped packets are useless (realtime things like calls) UDP is used which doesn't confirm anything
-   UDP ports and seperate from TCP ports (0-65535)


## Networking 2 {#networking-2}

-   Private IPv4 Spaces are
    -   10.0.0.0/8 (10.0.0.0 - 10.255.255.255)
    -   172.16.0.0/12 (172.16.0.0 - 172.31.255.255)
    -   192.168.0.0/16 (192.168.0.0 - 192.168.255.255)
    -   Loopback is 127.0.0.1
-   IPv6 loopback is ::1
-   TCP Acknowledgment number increments by number of bytes recieved


## Networking 3 {#networking-3}

-   SMTP has 3 commands (MAIL, RCPT, DATA)
-   POP3 downloads messages straight from email server and removes them once synced
-   IMAP downloads messages straight from email server and **doesn't** remove them once synced
-   SPF puts a text record in your domain saying who is allowed to send messages with your domain using ips
-   DKIM puts a public key in your domain and a server will sign the email with your private key (more secure than SPF)


## Networking 4 {#networking-4}

-   Authoritative Domain Server maps an ip to a domain for a specific domain
-   Reverse lookups translate an ip to a domain name
    -   We do this by looking up "ip.in-addr.arpa" as long the domain configures this
-   Iterative lookups take away from DNS server load compared to recursive lookups
-   DNS Record Types
    1.  A Record: IPv4 IP
    2.  AAAA Record: IPv6 IP
    3.  CNAME Record: alias domain name
    4.  MX Record: Email Server IP
    5.  NS Record: Name server
    6.  PTR Record: Reverse lookups
    7.  TXT Record: Other text


## Networking 5 {#networking-5}

-   OSI
    -   Layer 7 - Application (Data)
    -   Layer 6 - Presentation (Data)
    -   Layer 5 - Session (Data)
    -   Layer 4 - Transport (Segment)
    -   Layer 3 - Network (Packet, Datagram)
    -   Layer 2 - Data Link (Frame, Cell)
    -   Layer 1 - Physical (Frame, Bit)
-   TCP/IP
    -   Layer 4 - Application (OSI: Application, Presentation, Session)
    -   Layer 3 - Transport (OSI: Transport)
    -   Layer 2 - Internet (OSI: Network)
    -   Layer 1 - Network Access (OSI: Data Link, Physical)


## Introduction to Servers {#introduction-to-servers}


## Web Servers {#web-servers}

-   LAMP Stack is Linux, Apache, MySQL, and PHP
-   Response Codes
    -   100 Continue - Everything is looking smooth. Continue as you were.
    -   200 OK - The request has been completed with no errors. This is a good sign on weblogs. It also varies slightly depending on what kind of HTTP method was used (GET, POST, HEAD, TRACE)
    -   202 Accepted - Received but have not yet done anything about it.
    -   301 Moved Permanently - Usually, the new URL is given in the response
    -   400 Bad Request - Invalid Syntax error
    -   401 Unauthorized - You are not allowed into this site without logging in. Unauthenticated.
    -   403 Forbidden - Same as 401, but the server knows the client's identity. This usually means you don't have enough privilege.
    -   404 Not Found - Uh oh. Nobody knows where that URL. Maybe you typed it in the wrong way. You could try doing this now.
    -   408 Request Timeout - The server is shutting you down for idleness
    -   500 Internal Server Error - The server has no idea what to do, so it took a nap instead. This typically happens due to bad code or failure to handle data or an exception. These are often worth investigating!
    -   502 Bad Gateway - Issue with the servers connection.
    -   503 Service Unavailable - Overloaded server. Most likely because everyone is trying to buy a PS5 on the website.
    -   504 Gateway Timeout - Sorry, your servers are too slow. Probably a connection problem somewhere in the network.
-   Security
    -   Limit the directory's permissions
    -   Disable versioning to provide less info
    -   Check default config


## Database Servers {#database-servers}

-   Considerations
    -   Validate the IP connectivity rules. This is a particularly common mistake for SQL servers running in cloud instances, like on AWS. It is set to make them accessible to the open Internet, allowing port 3306 (for MySQL) to be connected to by anyone in the world. Granted, password protection should prevent anything bad from happening, but a vulnerability or configuration error could allow for huge database leaks. It is best that the access is locked down to those that need it, e.g. the web server it might be powering.

    -   Remember to run the mysql\_secure\_install as we covered in our demonstration. This will step you through removing the test database, anonymous accounts and enforcing credentials on the root user. This improves your security instantly.

    -   Validate that MySQL is running with an appropriately privileged and restricted user. Most default setup packages on modern Linux will do this for you, but it pays to check, as you do not want your database running as root. A specific lower privileged mysql user is a really common and useful practice.

    -   Consider removing the mysql history file. Typically located at ~/.mysql\_history this file helpfully logs what you have typed in to the mysql cli. However, it could expose credentials or configuration to users of the system!

    -   Ask yourself if you need remote logins at all? Is your database running with a local web application that can connect over 127.0.0.1? Do you need it bound to 0.0.0.0 and accessible more broadly? If not you can reduce your attack surface area generically with this configuration change.

    -   Conduct MySQL verb restrictions. I know this one sounds odd but here is a good example - limit the use of SHOW DATABASES. If an attacker has less information to work with it is harder for them to exploit, and even more so for automated tools. You know your database names for your applications, and have them configured in connection strings. Attackers may not and this can make it much harder for them to identify them depending on where they attack.

    -   Update. Update. Update. This will help you eliminate security vulnerabilities but remember that each patch might come with changes to how SQL works and the language specifics, which means you might also need to make changes to your application - or update web frameworks. A good test environment where you can validate changes really helps here.

    -   Go check the Linux file permissions! Check that my.cnf is accessible from the root user only or your administrator user via sudo. Make sure that the MySQL data directory (typically /usr/local/mysql/data) is accessible for the mysql user but not other users on the system.

    -   Consider use of a managed SQL platform that does a lot of this for you. Amazon RDS or services like Aurora can automatically apply updates, restrict access to the backend system and simplify operational and security ownership. That does come at a cost, and you still need to configure credentials and the service appropriately - but it can reduce the work of server ownership significantly!

    -   It is not all about security. Have you considered the size of your database? Have you allocated only 5GB to the virtual volume, which will shortly be exhausted by your use case and cause the system to completely implode? Make sure you have adequately sized your system to the requirements, and configured monitoring so you know if disk space is getting low!


## DNS Servers {#dns-servers}

-   DNSSEC allows a root DNS server to vouch for another as long as you can validate the root
-   13 Root servers across the world


## Log Servers {#log-servers}

-   SIM (Security Information Management) logs pure info
-   SEM (Security Event Management) analyzes info for certain events/alerts
-   SIEM (Both)
-   ELK (Elasticsearch, Logstash, Kibana)


### <span class="org-todo todo TODO">TODO</span> Look into Rsyslog {#look-into-rsyslog}


## Email Servers {#email-servers}

-   Process
    -   Compose email, hit send - your email client connects to the sending server on your domain.
    -   Email client shares the relevant information (your email address, recipient's email address, and the message content, including any attachments) with your sending server.
    -   Your sending server processes the email address of the recipient, paying particular attention to whether or not it is on the same domain as that of the sender, as this affects what happens next.
    -   If the two email addresses are on the same domain, then no routing between servers is needed; the message goes straight to the domain's incoming mail server (IMAP or POP3) - this is the end of the journey for this email, and the message can be read by the recipient.
    -   If the recipient is on a different domain to the sender, the sending server identifies where the recipients mail server is using DNS.
    -   The message is usually then routed along a series of servers until it reaches the recipients mail server.
    -   The incoming message is scanned by the recipient's mail server. If it passes filters and other checks, and the recipient mail server validates the e-mail is for one of its users it will be forwarded to the mailbox of the user for them to download.


## Synchronization Servers {#synchronization-servers}


## Programming 1 {#programming-1}


## Programming 2 {#programming-2}


## Programming 3 {#programming-3}

TCP Connection

```python
import socket

client_socket = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
client_socket.connect(('127.0.0.1', 1337))
client_socket.send(b"Do you want to play a game?\n")
received = client_socket.recv(1024)
print(received)
client_socket.close()
```

TCP Server

```python
import socket

server_socket = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
server_socket.bind(("0.0.0.0", 1337))
server_socket.listen(10)

while True:
        conn, addr = server_socket.accept()
        conn.send(b"Do you want to play a game?\n")
        received = conn.recv(1024)
        print(received)

server_socket.close()
```

UDP Socket

```python
import socket

client_socket = socket.socket(socket.AF_INET, socket.SOCK_DGRAM)
client_socket.sendto(b"UDP is connectionless...\n", ("127.0.0.1", 1337))
```

UDP Server

```python
import socket

server_socket = socket.socket(socket.AF_INET, socket.SOCK_DGRAM)
server_socket.bind(("0.0.0.0", 1337))

while True:
        data, addr = server_socket.recvfrom(1024)
        print(data)
```

Threaded TCP Server

```python
import socket
import _thread

# Thread handler
def handler(client_sock, address):
    client_sock.send(b"Do you want to play a game?\n")
    data = client_sock.recv(1024)
    print(repr(address) + " said: " + data.decode())
    client_sock.close()
    print(repr(address) + " connection ended.")

# Set up our server
server_socket = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
server_socket.bind(("0.0.0.0", 1337))
server_socket.listen(10)

# Run the server with threads
while True:
    print("Server listening for connections...")

    client_sock, address = server_socket.accept()
    print("Connection from: " + repr(address))

    _thread.start_new_thread(handler, (client_sock, address))

```


## Programming 4 {#programming-4}


## Programming 5 {#programming-5}


## Programming 6 {#programming-6}

-   In C, & references and \* dereferences


## Introduction to SQL {#introduction-to-sql}


## MySQL Basic Statements {#mysql-basic-statements}


## MySQL Joins {#mysql-joins}

-   `INNER JOIN` returns only if on left and right
-   `LEFT JOIN` returns all on left even if nothing on right, and on right only if on left
-   `RIGHT JOIN` returns all on right even if nothing on left, and on left only if on right


## MySQL Operators {#mysql-operators}

-   Can subquery within parentheses
-   `EXISTS` completes a query only if the given statement is applicable for the current row (is rerun for every row)
-   `UNION` combines two queries
-   A `FULL JOIN` is the `UNION` of both a `LEFT JOIN` and a `RIGHT JOIN`


## MySQL Database Admin {#mysql-database-admin}

Creating a Table

```sql
CREATE TABLE `customers` (
  `customerId` mediumint(8) unsigned NOT NULL auto_increment,
  `firstName` varchar(255) default NULL,
  `lastName` varchar(255) default NULL,
  `address` varchar(255) default NULL,
  `city` varchar(255),
  `country` varchar(100) default NULL,
  PRIMARY KEY (`customerId`)
) AUTO_INCREMENT=1;

CREATE TABLE `orders` (
  `orderId` mediumint(8) unsigned NOT NULL auto_increment,
  `date` varchar(255),
  `currency` varchar(255) default NULL,
  `total` mediumint default NULL,
  `customerId` mediumint unsigned NOT NULL,
  PRIMARY KEY (`orderId`),
  FOREIGN KEY (`customerId`) REFERENCES customers(`customerId`)
) AUTO_INCREMENT=1;
```

Inserting Values

```sql
INSERT INTO `customers` (`firstName`,`lastName`,`address`,`city`,`country`) VALUES ("Ursa","Vasquez","P.O. Box 878, 8416 Nullam St.","Worcester","United States"),("Quyn","Meyer","P.O. Box 670, 7155 Tincidunt St.","Price","Canada"),("Orli","Klein","4981 Gravida St.","Barrow-in-Furness","United Kingdom"),("Tallulah","Hines","6279 Pellentesque Street","Omaha","United States"),("Joel","Ross","P.O. Box 842, 4634 Egestas Avenue","Clovenfords","United Kingdom"),("Charlotte","Ramos","794-1654 A Rd.","Akron","United States"),("Dennis","Avery","P.O. Box 506, 4804 Molestie Avenue","Matlock","United Kingdom"),("Igor","Malone","6627 Porttitor Rd.","Irvine","United Kingdom"),("Connor","Witt","5979 Vel St.","Tain","United Kingdom"),("Karen","Marquez","Ap #524-1173 Metus. Road","Annapolis Royal","Canada");

INSERT INTO `orders` (`date`,`currency`,`total`,`customerId`) VALUES ("2020-11-14","$",111,6),("2020-07-07","£",958,4),("2021-02-18","£",721,2),("2020-05-25","$",834,4),("2020-07-10","£",47,1),("2021-02-27","£",587,4),("2021-03-04","£",198,10),("2020-09-03","$",200,3),("2020-11-17","£",726,3),("2020-12-29","$",200,5);
```


## Windows Overview {#windows-overview}

-   The registry is a database of settings
-   Very powerful and can absolutely destroy things


## Windows Permissions {#windows-permissions}

-   UAC Levels
    1.  Always notify
    2.  Notify me only when apps try to make changes to my computer
    3.  Notify me only when apps try to make changes to my computer (do not dim my desktop)
    4.  Never notify


## The Windows CLI {#the-windows-cli}

-   To use network drive `net use [drive letter]: path`
-   To remove `net use [drive letter]: /delete`
-   To set ip `netsh interface ip set address <connection name> static <IP> <subnet> <gateway>`
-   To add user `net user /add <username> <password>`
-   To remove user `net user /delete <username>`
-   To see user group `net user <username>`
-   To add to user group `net localgroup <groupname> /add <username>`


## Scripting Windows {#scripting-windows}

-   `Get-Command`: Find all cmdlets that use a noun/verb
-   `Get-ChildItem`: List contents of folder
-   `Get-Content`: List contents of file
-   `Get-Process`: List running processes
-   `Start-Process`: Start a process
-   `Stop-Process`
-   `Get-Member`: displays info about a given object
-   Declare variable with $


## CPU & Memory {#cpu-and-memory}

-   CU (Control Unit): The director of components, directs electrical signals
-   ALU (Arithmetic Logic Unit): Does math and logic
-   CPU Registers are close to CPU, so they're fast but small
-   On 32-bit Intel CPU (x86)
    -   EAX, EBX, ECX, EDX
    -   \_X refers to lower 16 bits of the E\_X register
    -   \_H and \_L refer to the higher and lower 8 bits of the \_X register respectively
-   ESP is Stack Pointer (top of stack frame)
-   EBP is Base Pointer (bottom of stack frame)
-   ESI is Source Index (source of data)
-   EDI in Destination Index (destination of data)
-   CPU repeatedly fetches, decodes, executes and stores intstructions and their results


## Monitoring Execution {#monitoring-execution}


## Advanced Storage {#advanced-storage}

-   RAID (Redundant Array of Independent Disks)
    -   RAID 0: Striping, performant, no fault tolerance
    -   RAID 1: Mirroring, can lose a whole drive, halves storage
    -   RAID 5: Striping with parity, at least 3 drives, one drive can fail, fast read speed, if drive fails speed will decrease
    -   RAID 6: Striping with double parity, at least 4 drives, two drives can fail, fast read, slower write, if drives fail speed will decrease
    -   RAID 10: Both RAID 1 and 0, max read/write, halves storage because of mirroring
-   Cloud Storage
    -   File: stored by file, paths used to locate
    -   Block: data broken into blocks of equal size, each block has an address
    -   Object: data stores as an object, no hierarchy, ids used to locate


## Containers {#containers}


## Encryption 1 {#encryption-1}

-


## Security 1 {#security-1}


## Security 2 {#security-2}


## Security Distributions {#security-distributions}


## Reconnaissance 1 {#reconnaissance-1}


## Forensics 1 {#forensics-1}


## Forensics 2 {#forensics-2}


## Forensics 3 {#forensics-3}


## Exploitation 1 {#exploitation-1}


## Exploitation 2 {#exploitation-2}


## Exploitation 3 {#exploitation-3}


## Exploitation 4 {#exploitation-4}


## Privilege Escalation 1 {#privilege-escalation-1}


## Privilege Escalation 2 {#privilege-escalation-2}


## Persistence {#persistence}


## Lateral Movement {#lateral-movement}


## Ex filtration {#ex-filtration}

---
id: chapter-3-internet-era
title: Chapter 3 - The Internet Era Begins (2000–2005)
sidebar_label: Chapter 3 - The Internet Era Begins (2000–2005)
---

# The Internet Era Begins: Attacks Go Mainstream (2000–2005)

## Introduction

The turn of the millennium marked a dramatic shift in cyberattacks. The internet had become critical infrastructure for business, communication, and daily life. Broadband connectivity was expanding, e-commerce was booming, and millions of people were coming online for the first time.

This period saw the emergence of powerful worms that spread globally, the rise of organized cybercrime, and the birth of botnets—armies of compromised computers controlled remotely. Attacks were no longer the work of individual hackers; they were now part of a criminal economy.

## The ILOVEYOU Worm (2000)

### What Happened

On May 4, 2000, email servers around the world began crashing. Users received emails with the subject line "ILOVEYOU" and a Visual Basic script attachment. Those who opened the attachment unknowingly unleashed one of the most damaging worms in history.

The **ILOVEYOU worm** (also called the Love Bug) was created by a Filipino programmer named Onel de Guzman. When executed, it:

- Copied itself to a user's system files
- Searched for and overwrote image files on the hard drive
- Sent itself to everyone in the user's Outlook contact list
- Stole internet passwords and sent them to an attacker-controlled account

### The Damage

The ILOVEYOU worm spread to an estimated 50 million computers in just ten days. Organizations and governments worldwide experienced:

- **Email system failures** — So many infected messages overloaded servers that legitimate email couldn't be sent
- **Widespread data loss** — Overwritten files rendered systems useless
- **Business disruption** — Many companies shut down email servers to prevent spread
- **Global economic loss** — Estimated at $10–15 billion in recovery and productivity losses

The Pentagon, CIA, and countless corporations were affected. Many organizations were forced to shut down their email systems entirely until the threat could be contained.

### Why It Spread So Rapidly

The ILOVEYOU worm succeeded because:

1. **Emotional subject line** — "ILOVEYOU" was enticing enough that people opened attachments without thinking
2. **Social engineering** — It exploited human curiosity and trust in email contacts
3. **Automatic replication** — Once executed, it automatically sent itself to all contacts
4. **Weak security practices** — Many systems had no protection against executing email attachments
5. **Visibility of execution** — Unlike some worms, users didn't realize they'd been infected until damage was done

:::tip
The ILOVEYOU worm is a classic example of why email attachments from unknown senders should never be trusted, regardless of how personal or enticing the message seems.
:::

### The Aftermath

Onel de Guzman was arrested but ultimately not prosecuted (due to a legal loophole in Philippine law at the time). However, the incident prompted:

- Legislative action in the Philippines to create computer crime laws
- Global awareness of the dangers of email attachments
- Stronger email security measures and antivirus adoption
- Microsoft and email providers implementing restrictions on executable attachments

## SQL Slammer (2003)

### What Happened

On January 25, 2003, the **SQL Slammer worm** (also called Sapphire) was released, and it became the fastest-spreading worm in history. Unlike previous worms that spread through email, SQL Slammer exploited a network vulnerability in Microsoft SQL Server and SQL Server Desktop Engine.

The worm infected vulnerable systems by:

- Scanning for computers running SQL Server on port 1433
- Sending a malicious packet that exploited a buffer overflow vulnerability
- Causing the target to scan and infect other systems
- Spreading exponentially across the internet

### The Impact

SQL Slammer doubled the number of infected systems every 8.5 seconds at its peak. Within 30 minutes, it had infected 200,000 computers. Within three days, an estimated 75,000 servers were compromised.

The worm didn't destroy data or steal information—its primary effect was to:

- Consume massive amounts of bandwidth
- Slow internet traffic globally by 25%
- Disrupt critical infrastructure including power plants, transportation systems, and hospitals
- Cause an estimated $1 billion in direct costs

### Why It Mattered

SQL Slammer demonstrated several important security lessons:

1. **Unpatched systems are vulnerable** — A patch existed, but many organizations hadn't applied it
2. **Worms can spread through networks, not just email** — Directly attacking systems was faster than social engineering
3. **Critical infrastructure depends on security** — A manufacturing plant in Ohio went offline, affecting production
4. **Speed matters** — By the time organizations realized they were infected, the worm had already spread globally

### The Lesson

Organizations learned that delaying security patches wasn't just an inconvenience—it had tangible business and infrastructure risks.

## The Rise of Botnets and Organized Cybercrime

### What Are Botnets?

A **botnet** is a network of compromised computers (called "bots" or "zombies") controlled remotely by an attacker. The attacker uses the botnet for:

- Launching DDoS attacks
- Sending spam emails
- Stealing personal information
- Distributing malware
- Renting out computing power to other criminals

### Notable Botnets of the 2000s

**Mydoom** (2004) — This worm created one of the largest botnets ever seen. At its peak, it infected millions of computers and launched massive DDoS attacks against major companies like Microsoft and SCO.

**Bagle** (2004) — An email worm that created a botnet for spam distribution. It demonstrated how botnets could be rented out to spammers for profit.

**Sober** (2005) — A worm that propagated through email and file sharing, creating another massive botnet used for spam and fraud.

### The Economics of Cybercrime

By the mid-2000s, cybercrime had become a profitable business:

- **Spam networks** — Renting botnet capacity to send millions of unwanted emails
- **Click fraud** — Using compromised computers to artificially generate advertising clicks for profit
- **Stolen data** — Selling credit card numbers, passwords, and personal information on underground markets
- **Ransomware** — Holding data hostage for payment (early versions were less sophisticated but the model was established)

### Underground Markets

Organized cybercriminals began using forums and hidden websites (early versions of what we'd later call the dark web) to:

- Sell stolen credentials and financial information
- Offer hacking services
- Distribute malware and botnet tools
- Coordinate campaigns
- Launder money

## Major Attacks of the Period

### The Code Red Worm (2001)

Exploited Microsoft IIS web server vulnerability. It defaced websites with the message "Hacked by Chinese" and launched DDoS attacks against whitehouse.gov. It infected approximately 359,000 computers.

### The Nimda Worm (2001)

Spread through both email and network file shares. It modified web pages and left backdoors for attacker access. It was designed to be resistant to antivirus software and caused widespread disruption.

### The MSBlaster Worm (2003)

Exploited a Windows vulnerability and launched DDoS attacks against windowsupdate.com. It demonstrated how vulnerable Windows systems were and prompted a major Microsoft security update.

## Changing Security Landscape

During this period, cybersecurity matured:

- **Antivirus software** became standard on most computers
- **Firewalls** were deployed on corporate networks
- **Intrusion detection systems** were developed to identify attacks
- **Security updates and patches** were recognized as essential
- **Incident response teams** were established at major organizations
- **Cybersecurity jobs** became a growing career field

However, attackers continued to stay ahead of defenses, discovering and exploiting new vulnerabilities faster than patches could be deployed.

## Summary

The period from 2000 to 2005 transformed cyberattacks from novelty events to serious business threats. The ILOVEYOU worm showed the power of social engineering at scale. SQL Slammer demonstrated the vulnerability of unpatched systems and the risk to critical infrastructure. Most importantly, botnets and organized cybercrime emerged as a profitable enterprise, shifting attacks from curious hackers to professional criminals motivated by financial gain.

By 2005, it was clear that cybersecurity was not optional—it was essential to business and government operations. The stage was set for the next evolution: state-sponsored cyberwarfare.


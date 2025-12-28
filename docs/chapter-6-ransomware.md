---
id: chapter-6-ransomware
title: Chapter 6 - Ransomware Revolution (2016–2020)
sidebar_label: Chapter 6 - Ransomware Revolution (2016–2020)
---

# Ransomware Revolution: Extortion Goes Digital (2016–2020)

## Introduction

While data breaches were devastating, they typically resulted in stolen information that might be sold or exploited. A new attack model emerged and flourished in the 2016–2020 period: **ransomware**. Rather than stealing data, attackers encrypted it and held it hostage, demanding payment for decryption.

Ransomware became the dominant form of cybercrime, generating billions in criminal revenue and causing disruption to hospitals, government agencies, and essential services. It represented a direct, quantifiable extortion model that criminals could scale globally.

## What Is Ransomware?

Ransomware is malware that:

- **Encrypts files** on a victim's computer or network
- **Prevents access** to the encrypted data
- **Demands payment** for the decryption key
- **May threaten exposure** of stolen data if payment isn't made (double extortion)

The business model is straightforward: victims choose between paying the ransom or losing their data. For critical systems—hospitals, utilities, government agencies—the pressure to pay is enormous.

## WannaCry (2017)

### What Happened

On May 12, 2017, a global ransomware attack began spreading. **WannaCry** (also called Wannacryptor) exploited a Windows vulnerability and spread rapidly across networks. Within days, it infected systems in over 150 countries.

WannaCry:

- **Exploited EternalBlue** — A Windows vulnerability discovered and weaponized by the NSA, then leaked publicly
- **Spread through network shares** — Propagating from infected computers to others without user interaction (worm-like behavior)
- **Encrypted all accessible files** — Rendering systems unusable
- **Demanded $300-600 in Bitcoin** for a decryption key
- **Displayed a message** — "Your files have been encrypted" with instructions for payment

### The Spread

WannaCry spread with unprecedented speed:

- **Friday evening to Monday morning** — 150+ countries affected
- **230,000+ computers** infected by the end of the first week
- **Actual number likely higher** — Many organizations didn't report infection
- **Self-replicating** — Unlike previous ransomware, it spread automatically through network vulnerabilities

### Impact by Sector

**Healthcare**: Hospitals in the UK, Germany, and elsewhere had to postpone surgeries and redirect emergency patients. Patient care was directly impacted.

**Transportation**: Renault manufacturing plants shut down. Train systems experienced disruptions.

**Government**: Government agencies in Germany, Russia, and elsewhere experienced outages.

**Corporate**: Telecom companies, banking systems, and energy companies all reported disruptions.

### The Kill Switch

Interestingly, WannaCry had a built-in kill switch. The malware checked for the existence of a specific internet domain. A security researcher registered the domain (costing $10.69), which effectively slowed the malware's spread. However, the damage had already been done.

### Attribution

WannaCry was attributed to North Korea by the U.S. government, based on code similarities to previous North Korean malware and their history of cyberattacks. North Korea denied responsibility, but the attribution had significant geopolitical implications.

### Why WannaCry Mattered

- **Speed of spread** — A global pandemic of malware within days
- **Self-propagating** — It didn't rely on user interaction after initial compromise
- **Critical infrastructure impact** — Hospitals had to choose between losing patient data and other critical operations
- **Nation-state weapons going mainstream** — The leaked EternalBlue exploit, originally developed by the NSA, was now in the hands of all actors
- **Economic damage** — Estimated at $4–8 billion globally

:::note
The WannaCry attack led to major discussions about "stockpiling" exploits. Intelligence agencies like the NSA had discovered vulnerabilities but kept them secret for cyber warfare purposes. When the exploit was leaked, it became available to all threat actors, affecting millions of people worldwide.
:::

## NotPetya (2017)

### What Happened

Just two months after WannaCry, another massive ransomware attack emerged. **NotPetya** (also called Petya) spread rapidly across Ukraine and then globally.

NotPetya:

- **Spread through a software update** — Infected the software supply chain (specifically a Ukrainian accounting software company)
- **Propagated through networks** — Using the EternalBlue and EternalRomance exploits
- **Encrypted entire hard drives** — Not just files, but entire disk sectors, making recovery nearly impossible
- **Demanded $300 in Bitcoin** — Though decryption was impossible even if paid

### A Critical Difference

Unlike WannaCry, NotPetya appeared to be **destructive rather than financially motivated**. The decryption key was never made available even to those who paid the ransom. The attack seemed designed to cause maximum disruption rather than generate profit.

### The Scope

- **Infected 10,000+ computers** across multiple countries
- **Most heavily impacted Ukraine** — Where a large portion of infections occurred
- **Major global companies affected** — Including Maersk (shipping), Merck (pharmaceuticals), and Intel
- **Estimated cost** exceeded $10 billion globally

### Attribution

The U.S. government attributed NotPetya to the GRU, Russia's military intelligence service, based on code analysis, targeting patterns, and geopolitical context. This was notable: a nation-state was using destructive malware not for espionage or cyberwarfare, but for indiscriminate destruction.

### Why NotPetya Mattered

- **Nation-states using ransomware as a weapon** — Not for profit, but for disruption
- **Supply chain attacks** — Using software updates as a distribution vector
- **Irreversible damage** — Entire disks were destroyed, not just encrypted files
- **Geopolitical signaling** — The attack coincided with growing tensions between Russia and the West
- **Collateral damage** — The attack spread globally despite seeming to target Ukraine specifically

## Ryuk and Criminal Ransomware Evolution

### Ryuk Ransomware

Emerging around 2018, **Ryuk** represented a new evolution in ransomware:

- **Targeted enterprise networks** — Rather than infecting mass numbers of systems
- **High ransom demands** — Millions of dollars rather than hundreds
- **Multi-stage attacks** — Reconnaissance, lateral movement, then encryption
- **Selective encryption** — Encrypting only critical files to maximize pressure while maintaining operational visibility

### The Ryuk Criminal Enterprise

Ryuk attacks were typically preceded by:

1. **Network reconnaissance** — Attackers would spend weeks mapping the network
2. **Credential harvesting** — Using phishing and other methods to gain access
3. **Lateral movement** — Moving from compromised endpoint to domain controllers
4. **Backup destruction** — Deleting backups to prevent recovery
5. **Extortion** — Demanding millions in Bitcoin

### Financial Scale

- **Average Ryuk ransom demand**: $500,000–$2 million
- **Total estimated revenue from Ryuk**: Over $150 million
- **Payment statistics**: Organizations paid ransoms in 20-30% of cases

## The Ransomware Business Model

By 2020, ransomware had evolved into a sophisticated business:

### Ransomware-as-a-Service (RaaS)

Criminal groups developed platforms where other criminals could:

- **Purchase or lease ransomware tools**
- **Launch attacks** on targets they chose
- **Pay commission** to the original developers (typically 20-30%)
- **Access support services** — Help with ransom negotiations, cryptocurrency conversion, etc.

### Professional Operations

Major ransomware groups operated like legitimate businesses:

- **Organized management structures** — Clear leadership and role assignments
- **Negotiation teams** — Professional extortionists who negotiated ransom amounts
- **Data leak sites** — Public websites where stolen data was posted if ransoms weren't paid
- **Customer support** — Help documents and support channels for paying victims
- **Money laundering** — Complex cryptocurrency chains to convert Bitcoin to usable currency

### Notable Ransomware Families

| Name | Year | Notable Traits |
|------|------|---|
| WannaCry | 2017 | Worm-like spreading, global impact |
| NotPetya | 2017 | Destructive, supply chain |
| Ryuk | 2018+ | Enterprise targeting, high ransoms |
| Sodinokibi | 2019+ | RaaS model, double extortion |
| DarkSide | 2020+ | Selective targeting, billion-dollar thefts |

## Double Extortion

By 2020, ransomware groups implemented a tactic called **double extortion**:

1. **Encrypt the files** — Traditional ransomware approach
2. **Steal the data first** — Before encryption
3. **Threaten exposure** — If ransom isn't paid, stolen data is sold or published
4. **Demand payment twice** — Both for decryption and data secrecy

This made ransom demands even harder to refuse, as organizations faced losing both data access and data confidentiality.

## Impact on Critical Infrastructure

### Healthcare

Hospitals were particularly hard hit:

- **Patient care disrupted** — Surgery cancellations and emergency diversion
- **Patient data at risk** — Both lost to encryption and stolen
- **Life-saving decisions difficult** — Staff had to choose between patient safety and ransoms
- **Ransoms paid** — Many hospitals paid to restore systems quickly

### Government and Law Enforcement

- **Police departments losing evidence systems**
- **Government agencies paying millions in ransoms**
- **Public services disrupted** — Parks, utilities, and administrative services going offline

### Manufacturing and Supply Chains

- **Production halted** — Factories unable to operate
- **Supply chain disruptions** — Manufacturer outages affecting downstream companies

## The Financial Scale of Ransomware

By 2020:

- **Ransomware damage** was estimated at billions annually
- **Payment frequencies** — More organizations were paying, normalizing the extortion model
- **Average ransom payments** increased from thousands to millions
- **Cryptocurrency ecosystem** benefited — Bitcoin and other cryptocurrencies became essential to laundering ransom payments

## Government Response

Governments began to take action:

- **Executive orders** — U.S. and others mandated reporting of ransomware incidents
- **Sanctions** — Sanctioning countries harboring ransomware groups
- **International cooperation** — Cooperation between nations to investigate and disrupt groups
- **Financial restrictions** — Limiting cryptocurrency exchanges' ability to process ransom payments

## Mitigation and Defense

Organizations learned to protect against ransomware:

- **Segmented networks** — Preventing lateral movement
- **Backup strategies** — Secure, air-gapped backups for recovery
- **Patch management** — Keeping systems updated against known vulnerabilities
- **Endpoint protection** — Advanced malware detection
- **Incident response plans** — Rapid response to contain breaches

## Summary

The 2016–2020 period saw ransomware become the dominant form of cybercrime. WannaCry demonstrated the speed at which malware could spread globally and impact critical infrastructure. NotPetya showed that nation-states would use ransomware for destruction, not just profit. Ryuk and other enterprise-focused attacks evolved into sophisticated criminal operations with multi-million-dollar ransoms.

By 2020, ransomware wasn't just a technical problem—it was a geopolitical issue, a public health concern, and a fundamental challenge to digital society. The next phase would bring even more sophisticated supply chain attacks and vulnerabilities.


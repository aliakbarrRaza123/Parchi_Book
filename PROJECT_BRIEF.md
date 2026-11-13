# Parchi Book — Project Brief

**Student:** Ali Akbar Raza | BSEF24A021 | Punjab University College of Information Technology

---

## The Problem

In wholesale markets (like Shah Alam, Lahore), goods are sold on credit and written on a paper *parchi* and in a register. Register entries can be changed quietly — the buyer has no proof, so disputes happen often. Parchis get lost too.

## Who Uses It

A small wholesaler or his munshi who currently uses a paper register, loose parchis, and WhatsApp/phone calls for reminders.

## App in One Sentence

A ledger app that records credit sales and payments, and shows whenever a past entry has been silently changed.

---

## Core Features

| # | Feature | What it does |
|---|---------|-------------|
| 1 | **Customers & Balances** | Add customers (name, shop no., phone). List shows balance owed. Tap to open ledger. |
| 2 | **Record Entry** | Tap + in ledger → pick Goods or Payment → fill amount, date, due date, note. Entries are add-only (no edit/delete). |
| 3 | **Integrity Check (hash chain)** | Each entry stores SHA-256 of its data + previous hash. Integrity Check tab shows ✅ or ❌ with the broken entry. |
| 4 | **Parchi Photo** | Attach a photo of the paper parchi per entry. Opens full-size in Entry Detail. |
| 5 | **WhatsApp Receipt** | Opens WhatsApp with a pre-written message: customer name, amount, new balance, due date, and entry hash. |

---

## Screens

| Screen | Tab / Stack | Purpose |
|--------|-------------|---------|
| Sign In | Root | Email + password, toggle to Create Account |
| Customers | Tab 1 (stack root) | Search, total owed, customer list, Add Customer modal |
| Customer Ledger | Tab 1 stack | All entries for one customer |
| Add Entry | Tab 1 stack | Form to record a goods/payment entry |
| Entry Detail | Tab 1 stack | Entry data, photo, hashes, Send Receipt button |
| Integrity Check | Tab 2 | Check Chain button + result |

---

## Tech Stack

- **Framework:** Expo (SDK 58) + React Native + Expo Router (file-based navigation)
- **Language:** TypeScript
- **Backend:** Supabase (Auth, Postgres DB, Storage)
- **Hashing:** `expo-crypto` (SHA-256)
- **Photo:** `expo-image-picker`
- **WhatsApp:** `Linking` to `wa.me` URL

---

## Data Model

### `customers`
`id` · `name` · `shop_no` · `phone`

### `entries`
`id` · `customer_id` · `type` (goods | payment) · `amount` · `entry_date` · `due_date` · `note` · `photo_path` · `prev_hash` · `hash`

**Hash =** SHA-256(`id + customer_id + type + amount + entry_date + due_date + prev_hash`)  
*(Note is excluded; amounts are whole rupees for consistent hashing)*

---

## 3-Week Build Schedule

| Days | Goal |
|------|------|
| Thu–Sat (Week 1) | Navigation skeleton + Customers screen with dummy data + Add Customer modal |
| Week 2 | Supabase integration: sign-in, real customers + entries in DB |
| Week 3 | Hash chain + Integrity Check + Parchi photo + WhatsApp receipt + polish |

---

## Cut List (if time runs short)

| Order | Drop | Keep |
|-------|------|------|
| 1st | Parchi photo → text note instead | Everything else |
| 2nd | WhatsApp receipt | Ledger + chain + Integrity Check |
| 3rd | Sign-in → one fixed account | Ledger + chain + Integrity Check |
| **Never** | Hash chain + Integrity Check | — |

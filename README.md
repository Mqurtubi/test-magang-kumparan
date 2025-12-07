# Frontend Engineer Intern Assessment – Posts App

Project ini untuk tugas **Frontend Engineer Intern Skill Test**. Project ini meggunakan **React dan GraphQL** dan memiliki beberapa fitur seperti :

- Post list dengan pagination
- Post detail
- Membuat post
- Menghapus post

UI pada aplikasi ini dibangun dengan clean, dan responsive.

# Live Demo:  
https://posts-kumparan.vercel.app/

#Tech Stack

# Frontend

- **React + TypeScript**
- **React Router**
- **TailwindCSS**
- **Zustand** → Global state management
- **Zod** → Form validation schema
- **Axios** → API client
- **React Icons**
- **GraphQLZero**
- **Vite**

# Folder Struktur

src/

- api/ # API client + endpoint
- components/ # Reusable UI components
- graphql/ # GraphQL query strings
- hooks/ # Custom data fetching hooks
- pages/ # Route pages (Posts, Detail, Create)
- routes/ # App routing
- store/ # Zustand global store
- types/ # TypeScript types
- validations/ # Zod schemas
- Vitest + Testing Library/ # unit testing

# Fitur yang Diimplementasikan

### 1. **Halaman Daftar Posting**

- Fetch data posting secara paginasi dari GraphQL
- Menampilkan:
  - Judul posting
  - Body posting (dipotong 100 karakter)
  - Nama author
- Navigasi:
  - Tombol Next & Previous
  - Indikator halaman
- Skeleton loading saat memuat data

### 2. **Halaman Detail Posting**

- Menampilkan judul dan isi posting secara lengkap
- Data author (nama & email)
- Menampilkan daftar komentar
- Tombol kembali ke halaman daftar posting

### 3. **Membuat Postingan Baru**

- Input form:
  - title
  - body
  - userId (dropdown dari API user)
- Validasi menggunakan **Zod**
- Mutation GraphQL untuk menambah post
- Setelah berhasil:
  - Post baru langsung masuk ke global state (Zustand)
  - Menampilkan pesan sukses
  - Reset form

### 4. **Hapus Postingan**

- Tombol delete pada setiap posting
- Konfirmasi sebelum hapus
- Menghapus dari global store (Zustand)
- UI langsung ter-update

### 5. **Unit Testing (Vitest + RTL)**

- Test input rendering

# Cara menjalankan

1. Clone repository

```bash
git clone https://github.com/Mqurtubi/test-magang-kumparan.git
cd test-magang-kumparan
```

2. Install depedencies

```bash
npm install
```

3. Jalankan mode development

```bash
npm run dev
```

4. Jalankan mode build

```bash
npm run build
```

5. jalankan mode preview

```bash
npm run preview
```

6. Jalankan test

```bash
npm run test
```

# Screenshot/Demo

<img width="1402" height="822" alt="image" src="https://github.com/user-attachments/assets/61ff841e-bb71-4a1a-bdbe-e82778fbf05f" />
<img width="1404" height="742" alt="image" src="https://github.com/user-attachments/assets/b36749a5-056d-4603-8c7d-59b034bab66a" />
<img width="1426" height="735" alt="image" src="https://github.com/user-attachments/assets/a2a66dff-d0a8-44a7-916e-c8de81c40d18" />

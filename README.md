# Frontend Engineer Intern Assessment – Posts App
Project ini untuk tugas **Frontend Engineer Intern Skill Test**. Project ini meggunakan **React dan GraphQL** dan memiliki beberapa fitur seperti : 

- Post list dengan pagination
- Post detail
- Membuat post
- Menghapus post

UI pada aplikasi ini dibangun dengan clean, dan responsive.

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

# Cara menjalankan
git clone https://github.com/Mqurtubi/test-magang-kumparan.git
cd test-magang-kumparan


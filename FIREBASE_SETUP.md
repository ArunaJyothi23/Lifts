# 🔥 Firebase Backend & Database Setup Guide
**Vision Lifts & Solutions | Elevator Operations Portal**

This application is now fully wired with **Google Firebase** for:
- 📥 **Cloud Firestore Database**: Real-time storage for Leads, Products, Projects, and SEO meta configs.
- 🔐 **Firebase Authentication**: Secure administrator login.
- ⚡ **Zero-Crash Fallback**: Even without environment variables configured, the application functions seamlessly in demo/local mode.

---

## 🛠️ Step-by-Step Setup (Takes ~3 minutes)

### Step 1: Create a Free Firebase Project
1. Go to the [Firebase Console](https://console.firebase.google.com/).
2. Click **Add project** (or **Create a project**).
3. Name your project (e.g. `vision-lifts-portal`) and click **Continue**.
4. (Optional) Disable Google Analytics or leave it enabled, then click **Create project**.

---

### Step 2: Register the Web App & Copy Credentials
1. In your Firebase Project Overview dashboard, click the **Web** icon (`</>`) to add an app.
2. Enter an app nickname (e.g. `Vision Lifts Web`) and click **Register app**.
3. You will see a `firebaseConfig` block looking like this:
   ```javascript
   const firebaseConfig = {
     apiKey: "AIzaSy...",
     authDomain: "vision-lifts-portal.firebaseapp.com",
     projectId: "vision-lifts-portal",
     storageBucket: "vision-lifts-portal.appspot.com",
     messagingSenderId: "1234567890",
     appId: "1:1234567890:web:abcdef..."
   };
   ```
4. Your [`.env.local`](.env.local) file has been populated with these credentials:
   ```env
   NEXT_PUBLIC_FIREBASE_API_KEY=AIzaSyDvv1akcSHQrd075PoElAMH-qwA4_o6xSM
   NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=vision-lifts-portal.firebaseapp.com
   NEXT_PUBLIC_FIREBASE_PROJECT_ID=vision-lifts-portal
   NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=vision-lifts-portal.firebasestorage.app
   NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=897878625704
   NEXT_PUBLIC_FIREBASE_APP_ID=1:897878625704:web:efa9ee448b2da340cee19d
   NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID=G-X26SF7MTZR
   ```

---

### Step 3: Enable Firestore Database
1. In the Firebase Console left sidebar, click **Build** > **Firestore Database**.
2. Click **Create database**.
3. Choose your database location (select `asia-south1 (Mumbai)` for optimal low latency in Telangana/India).
4. Start in **Production mode** or **Test mode**:
   - If using **Test mode**, all reads/writes are allowed during development.
   - For **Production mode**, go to the **Rules** tab and set the following security rules:
     ```javascript
     rules_version = '2';
     service cloud.firestore {
       match /databases/{database}/documents {
         // Allow public creation of leads from website quotation/survey forms
         match /leads/{leadId} {
           allow create: if true;
           allow read, update, delete: if request.auth != null;
         }
         
         // Public can read products, projects & SEO, only authenticated admins can write
         match /products/{document=**} {
           allow read: if true;
           allow write: if request.auth != null;
         }
         match /projects/{document=**} {
           allow read: if true;
           allow write: if request.auth != null;
         }
         match /seo_configs/{document=**} {
           allow read: if true;
           allow write: if request.auth != null;
         }
       }
     }
     ```
5. Click **Publish**.

---

### Step 4: Enable Email & Password Authentication
1. In the Firebase Console left sidebar, click **Build** > **Authentication**.
2. Click **Get Started**.
3. Under the **Sign-in method** tab, click **Email/Password**.
4. Enable the first toggle (**Email/Password**) and click **Save**.
5. Go to the **Users** tab and click **Add user**:
   - **Email:** `admin@visionlifts.com` (or your preferred admin email)
   - **Password:** Set your secure administrator password
6. Click **Add user**.

---

### Step 5: Test Your Setup
1. Run your dev server:
   ```powershell
   npm run dev
   ```
2. Navigate to `http://localhost:3000/admin/login`.
3. Notice the green **"Firebase Auth Active"** status badge.
4. Log in with the email and password you created in Firebase.
5. In the `/admin` portal:
   - Check the **Leads & Surveys** tab.
   - Any website form submission (`/book-survey`, `/quote-request`, `/contact`, etc.) will instantly sync to your **Firestore > `leads`** collection!
   - Any changes to products or SEO will sync directly to Firestore in the cloud.

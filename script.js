// Import Firebase modules
import { initializeApp } from "firebase/app";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";

// Your Firebase config (replace with your actual values)
const firebaseConfig = {
  apiKey: "AIzaSyD11xke6tuo4t7m2kkuPpgYLD4GMBqVyYQ",
  authDomain: "bredi-app.firebaseapp.com",
  projectId: "bredi-app",
  storageBucket: "bredi-app.firebasestorage.app",
  messagingSenderId: "483632536732",
  appId: "1:483632536732:web:9254731455850f743e6159",
  measurementId: "G-TJC3D83KJ9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Storage
const storage = getStorage(app);

console.log("Firebase initialized successfully!");

// Example function to upload a file
async function uploadFile(file) {
  try {
    // Create a reference in storage
    const storageRef = ref(storage, `uploads/${file.name}`);

    // Upload file
    const snapshot = await uploadBytes(storageRef, file);
    console.log("File uploaded successfully:", snapshot.metadata.fullPath);

    // Get download URL
    const url = await getDownloadURL(storageRef);
    console.log("Download URL:", url);
    return url;
  } catch (error) {
    console.error("Error uploading file:", error);
    
  }
  }
 /* Firebase Storage security rules (move these to your Firebase console or a separate storage.rules file):
rules_version = '2';
service firebase.storage {
  match /b/{bucket}/o {
    match /{allPaths=**} {
      allow read, write: if true;
    }
  }
}
*/
 // Example usage:
// Suppose you have an HTML input: <input type="file" id="fileInput" />
// const fileInput = document.getElementById("fileInput");
// fileInput.addEventListener("change", (e) => {
//     const file = e.target.files[0];
//     uploadFile(file);
// });
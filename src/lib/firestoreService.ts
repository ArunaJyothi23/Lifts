import { db, isFirebaseConfigured } from "./firebase";
import {
  collection,
  doc,
  getDocs,
  setDoc,
  deleteDoc,
  query,
  orderBy,
} from "firebase/firestore";
import type { LeadSubmission } from "@/app/api/leads/route";
import type { SeoPageConfig } from "@/app/api/admin/seo/route";

// ============================================================================
// LEADS SERVICE
// ============================================================================
export async function addLeadToFirestore(lead: LeadSubmission): Promise<boolean> {
  if (!isFirebaseConfigured || !db) {
    return false;
  }
  try {
    const docRef = doc(db, "leads", lead.id);
    await setDoc(docRef, lead);
    return true;
  } catch (err) {
    console.warn("Could not save lead to Firestore, using fallback:", err);
    return false;
  }
}

export async function getLeadsFromFirestore(): Promise<LeadSubmission[] | null> {
  if (!isFirebaseConfigured || !db) {
    return null;
  }
  try {
    const leadsRef = collection(db, "leads");
    const q = query(leadsRef, orderBy("createdAt", "desc"));
    const snapshot = await getDocs(q);
    if (snapshot.empty) return [];
    return snapshot.docs.map((docSnap) => docSnap.data() as LeadSubmission);
  } catch (err) {
    console.warn("Could not fetch leads from Firestore, using fallback:", err);
    return null;
  }
}

export async function updateLeadStatusInFirestore(
  id: string,
  status: LeadSubmission["status"]
): Promise<boolean> {
  if (!isFirebaseConfigured || !db) return false;
  try {
    const docRef = doc(db, "leads", id);
    await setDoc(docRef, { status }, { merge: true });
    return true;
  } catch (err) {
    console.error("Failed to update lead status in Firestore:", err);
    return false;
  }
}

// ============================================================================
// SEO CONFIGS SERVICE
// ============================================================================
export async function getSeoConfigsFromFirestore(): Promise<SeoPageConfig[] | null> {
  if (!isFirebaseConfigured || !db) return null;
  try {
    const seoRef = collection(db, "seo_configs");
    const snapshot = await getDocs(seoRef);
    if (snapshot.empty) return null;
    return snapshot.docs.map((docSnap) => docSnap.data() as SeoPageConfig);
  } catch (err) {
    console.warn("Could not fetch SEO configs from Firestore:", err);
    return null;
  }
}

export async function saveSeoConfigToFirestore(config: SeoPageConfig): Promise<boolean> {
  if (!isFirebaseConfigured || !db) return false;
  try {
    // Document ID sanitized from slug (e.g., "/" -> "root", "/products" -> "products")
    const docId = config.slug === "/" ? "root" : config.slug.replace(/^\//, "").replace(/\//g, "_");
    const docRef = doc(db, "seo_configs", docId);
    await setDoc(docRef, config, { merge: true });
    return true;
  } catch (err) {
    console.error("Failed to save SEO config to Firestore:", err);
    return false;
  }
}

// ============================================================================
// PRODUCTS SERVICE
// ============================================================================
export async function getProductsFromFirestore<T>(): Promise<T[] | null> {
  if (!isFirebaseConfigured || !db) return null;
  try {
    const colRef = collection(db, "products");
    const snapshot = await getDocs(colRef);
    if (snapshot.empty) return null;
    return snapshot.docs.map((d) => d.data() as T);
  } catch (err) {
    console.warn("Could not fetch products from Firestore:", err);
    return null;
  }
}

export async function saveProductToFirestore<T extends { id: string }>(product: T): Promise<boolean> {
  if (!isFirebaseConfigured || !db) return false;
  try {
    const docRef = doc(db, "products", product.id);
    await setDoc(docRef, product, { merge: true });
    return true;
  } catch (err) {
    console.error("Failed to save product to Firestore:", err);
    return false;
  }
}

export async function deleteProductFromFirestore(id: string): Promise<boolean> {
  if (!isFirebaseConfigured || !db) return false;
  try {
    await deleteDoc(doc(db, "products", id));
    return true;
  } catch (err) {
    console.error("Failed to delete product from Firestore:", err);
    return false;
  }
}

// ============================================================================
// PROJECTS SERVICE
// ============================================================================
export async function getProjectsFromFirestore<T>(): Promise<T[] | null> {
  if (!isFirebaseConfigured || !db) return null;
  try {
    const colRef = collection(db, "projects");
    const snapshot = await getDocs(colRef);
    if (snapshot.empty) return null;
    return snapshot.docs.map((d) => d.data() as T);
  } catch (err) {
    console.warn("Could not fetch projects from Firestore:", err);
    return null;
  }
}

export async function saveProjectToFirestore<T extends { id: string }>(project: T): Promise<boolean> {
  if (!isFirebaseConfigured || !db) return false;
  try {
    const docRef = doc(db, "projects", project.id);
    await setDoc(docRef, project, { merge: true });
    return true;
  } catch (err) {
    console.error("Failed to save project to Firestore:", err);
    return false;
  }
}

export async function deleteProjectFromFirestore(id: string): Promise<boolean> {
  if (!isFirebaseConfigured || !db) return false;
  try {
    await deleteDoc(doc(db, "projects", id));
    return true;
  } catch (err) {
    console.error("Failed to delete project from Firestore:", err);
    return false;
  }
}

// ============================================================================
// DATABASE INITIAL SEEDING UTILITY
// ============================================================================
export async function seedInitialFirestoreData(params: {
  products: any[];
  projects: any[];
  seoPages: any[];
  leads: any[];
}): Promise<{ success: boolean; message: string }> {
  if (!isFirebaseConfigured || !db) {
    return { success: false, message: "Firebase credentials not configured." };
  }

  try {
    for (const p of params.products) {
      await setDoc(doc(db, "products", p.id), p, { merge: true });
    }
    for (const proj of params.projects) {
      await setDoc(doc(db, "projects", proj.id), proj, { merge: true });
    }
    for (const s of params.seoPages) {
      const docId = s.slug === "/" ? "root" : s.slug.replace(/^\//, "").replace(/\//g, "_");
      await setDoc(doc(db, "seo_configs", docId), s, { merge: true });
    }
    for (const l of params.leads) {
      await setDoc(doc(db, "leads", l.id), l, { merge: true });
    }

    return {
      success: true,
      message: `Cloud Firestore successfully populated with ${params.products.length} products, ${params.projects.length} projects, ${params.seoPages.length} SEO configs, and ${params.leads.length} leads!`,
    };
  } catch (err: any) {
    console.error("Failed to seed Firestore:", err);
    return { success: false, message: err.message || "Failed to seed Firestore." };
  }
}

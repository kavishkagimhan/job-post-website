import { db } from "../firebase";

import {
  collection,
  getDocs,
  addDoc,
  deleteDoc,
  doc,
} from "firebase/firestore";

const applyCollectionRef = collection(db, "apply");
class applyDataService {

  addApplication= (newApplication) => {
    return addDoc(applyCollectionRef, newApplication);
  };

//   updateJob = (id, updatedJob) => {
//     const jobDoc = doc(db, "jobs", id);
//     return updateDoc(jobDoc, updatedJob);
//   };

  deleteApplication = (id) => {
    const applyDoc = doc(db, "apply", id);
    return deleteDoc(applyDoc);
  };

  getAllApplications = () => {
    return getDocs(applyCollectionRef);
  };

//   getJob = (id) => {
//     const jobDoc = doc(db, "jobs", id);
//     return getDoc(jobDoc);
//   };
}

export default new applyDataService();
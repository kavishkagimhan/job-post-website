import { db } from "../firebase";

import {
  collection,
  getDocs,
  getDoc,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
} from "firebase/firestore";

const jobCollectionRef = collection(db, "jobs");
class jobDataService {

  addJob= (newJob) => {
    return addDoc(jobCollectionRef, newJob);
  };

  updateJob = (id, updatedJob) => {
    const jobDoc = doc(db, "jobs", id);
    return updateDoc(jobDoc, updatedJob);
  };

  deleteJob = (id) => {
    const jobDoc = doc(db, "jobs", id);
    return deleteDoc(jobDoc);
  };

  getAllJobs = () => {
    return getDocs(jobCollectionRef);
  };

  getJob = (id) => {
    const jobDoc = doc(db, "jobs", id);
    return getDoc(jobDoc);
  };
}

export default new jobDataService();
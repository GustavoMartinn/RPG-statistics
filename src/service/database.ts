import { addDoc, collection, deleteDoc, doc, getDocs, setDoc, updateDoc } from "firebase/firestore";
import { Field } from "../types/field";
import { database } from "./firebase";

export function getStatistcs() {
  return new Promise<Field[]>((resolve, reject) => {
    getDocs(collection(database, "statistics"))
      .then((querySnapshot) => {
        const newData = querySnapshot.docs
          .map((doc) => ({ ...doc.data(), id: doc.id }));
        console.log("statistics", newData);

        resolve(newData as Field[]);
      })
      .catch((error) => reject(error));
  });
}

export function deleteStatistics(id: string) {
  return new Promise<void>((resolve, reject) => {
    deleteDoc(doc(database, "statistics", id))
      .then(() => resolve())
      .catch((error) => reject(error));
  });
}

export function addStatistics(data: {
  field: string;
  value: string;
}) {
  return new Promise<void>((resolve, reject) => {
    addDoc(collection(database, "statistics"), data)
      .then((data) => {
        console.log("addStatistics", data);
        resolve();
      })
      .catch((error) => reject(error));
  });
}

export function updateStatistics(id: string, value: string) {
  return new Promise<void>((resolve, reject) => {
    updateDoc(doc(database, "statistics", id), {
      value,
    })
      .then((data) => {
        console.log("updateStatistics", data);
        resolve()
      })
      .catch((error) => reject(error));
  });
}
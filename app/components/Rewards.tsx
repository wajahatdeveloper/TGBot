"use client";

import { useState, useEffect } from 'react';
import { collection, query, where, onSnapshot } from 'firebase/firestore';
import { db } from '@/app/lib/firebase';
import TaskItem from '@/app/components/TaskItem';
import { Task } from '@/app/types/task';

export default function Rewards() {
  const [tasks, setTasks] = useState<Task[]>([]);

  useEffect(() => {
    const q = query(
      collection(db, 'tasks')
    );
    
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const taskList: Task[] = [];
      querySnapshot.forEach((doc) => {
        taskList.push({ id: doc.id, ...doc.data() } as Task);
      });
      setTasks(taskList);
    });

    return () => unsubscribe();
  },[]);

  return (
    <ul className="space-y-4">
      Rewards
    </ul>
  );
}
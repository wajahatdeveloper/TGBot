"use client";

import { useState, useEffect } from 'react';
import { collection, query, where, onSnapshot } from 'firebase/firestore';
import { db } from '@/app/lib/firebase';
import TaskItem from '@/app/components/TaskItem';
import { Task } from '@/app/types/task';
import { Card, Slider } from '@mui/material';

export default function Progression() {
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
  }, []);

  function valuetext(value: number) {
    return `${value}`;
  }

  return (
    <ul className="space-y-4" style={{width:"100%"}}>
      <h4 className="font-bold text-xl text-white-800">Progression</h4>
      <h5>Dubai</h5>
        <Slider
          aria-label="Small steps"
          defaultValue={0}
          getAriaValueText={valuetext}
          step={0.1}
          marks
          min={0}
          max={1}
          valueLabelDisplay="auto"
          disabled
        />
        <h5>San Francisco</h5>
        <Slider
          aria-label="Small steps"
          defaultValue={0}
          getAriaValueText={valuetext}
          step={0.1}
          marks
          min={0}
          max={1}
          valueLabelDisplay="auto"
          disabled
        />
    </ul>
    
  );
}
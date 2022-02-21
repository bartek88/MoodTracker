import React from 'react';
import { ScrollView } from 'react-native';
import { useAppContext } from '../App.provider';
import { MoodItemRow } from '../components/MoodItemRow';

export const History: React.FC = () => {
  const { moodList } = useAppContext();

  return (
    <ScrollView>
      {[...moodList].reverse().map(item => (
        <MoodItemRow key={item.timestamp} item={item} />
      ))}
    </ScrollView>
  );
};

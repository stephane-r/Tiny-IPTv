import React from 'react';
import { View } from 'react-native';

interface Props {
  width?: number;
  height?: number;
}

const Spacer: React.FC<Props> = ({ width = 0, height = 0 }) => (
  <View style={{ width, height }} />
);

export default Spacer;

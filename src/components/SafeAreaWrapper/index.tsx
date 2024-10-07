import {FC, ReactNode} from 'react';
import {Platform, View} from 'react-native';

interface SafeAreaWrapperProps {
  children: ReactNode;
}

const SafeAreaWrapper: FC<SafeAreaWrapperProps> = ({children}) => {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: '#121212',
        paddingTop: Platform.OS === 'ios' ? 50 : 10,
      }}>
      {children}
    </View>
  );
};

export default SafeAreaWrapper;

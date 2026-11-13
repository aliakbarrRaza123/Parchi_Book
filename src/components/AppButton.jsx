import { useRouter } from 'expo-router';
import { Pressable, Text } from 'react-native';

export default function AppButton({title,variant = 'primary',href,onPress}) 
{
  const router = useRouter();

  const variants = {
    primary: {
      backgroundColor: '#245493',
      borderColor: '#245493',
      textColor: '#FFFFFF',
    },
    outline: {
      backgroundColor: '#FFFFFF',
      borderColor: '#245493',
      textColor: '#245493',
    },
    info: {
      backgroundColor: '#E0ECFC',
      borderColor: '#C2D6F2',
      textColor: '#244F88',
    },
    secondary: {
      backgroundColor: '#F4F6FA',
      borderColor: '#000000',
      textColor: '#203047',
    },
  };

  const selected = variants[variant] || variants.primary;

  function handlePress() {
    if (href) {
      router.push(href);
    } 
    else if (onPress) {
      onPress();
    }
  }

  return (
    <Pressable
      onPress={handlePress}
      style={{
        alignSelf: 'flex-start',
        maxWidth: '100%',
        minHeight: 44,
        paddingVertical: 12,
        paddingHorizontal: 18,
        borderRadius: 8,
        borderWidth: 1,
        borderColor: selected.borderColor,
        backgroundColor: selected.backgroundColor,
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Text
        style={{
          color: selected.textColor,
          fontSize: 16,
          fontWeight: '600',
          textAlign: 'center',
        }}
      >
        {title}
      </Text>
    </Pressable>
  );
}
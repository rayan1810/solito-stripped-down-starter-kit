import { createParam } from 'solito'
import { TextLink } from 'solito/link'
import { Text, View } from 'react-native'

const { useParam } = createParam<{ id: string }>()

export function UserDetailScreen() {
  const [id] = useParam('id')
  return (
    <View>
      <Text>{`User ID: ${id}`}</Text>
      <TextLink href="/">👈 Go Home</TextLink>
    </View>
  )
}

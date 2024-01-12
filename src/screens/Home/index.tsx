import { useState } from "react"
import { View } from "react-native"

import { styles } from "./styles"

import { Input } from "@/components/Input"

export function Home() {
  const [pix, setPix] = useState("")

  return (
    <View style={styles.container}>
      <Input.Container>
        <Input.Field
          placeholder="Nome, CPF/CNPJ ou chave Pix"
          onChangeText={setPix}
          value={pix}
        />

        <Input.ClearButton onPress={() => setPix("")} />
      </Input.Container>
    </View>
  )
}

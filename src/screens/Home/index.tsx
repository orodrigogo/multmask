import { useState } from "react"
import { View } from "react-native"

import { styles } from "./styles"
import { Input } from "@/components/Input"

import { cpfApplyMask, cnpjApplyMask } from "@/utils/masks"

export function Home() {
  const [pix, setPix] = useState("")

  function applyMask(input: string) {
    const onlyNumbers = input.replace(/\D/g, "")

    if (onlyNumbers.length === 11) {
      const cpf = cpfApplyMask(onlyNumbers)
      return setPix(cpf)
    }

    if (onlyNumbers.length === 14) {
      const cnpj = cnpjApplyMask(onlyNumbers)
      return setPix(cnpj)
    }

    const nameOrPixKey = input.replace(/[^a-zA-Z0-9 ]/g, "")
    setPix(nameOrPixKey)
  }

  return (
    <View style={styles.container}>
      <Input.Container>
        <Input.Field
          placeholder="Nome, CPF/CNPJ ou chave Pix"
          onChangeText={applyMask}
          value={pix}
        />

        <Input.ClearButton onPress={() => setPix("")} />
      </Input.Container>
    </View>
  )
}

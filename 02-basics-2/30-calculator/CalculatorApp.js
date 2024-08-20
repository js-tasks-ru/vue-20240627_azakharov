import { defineComponent, ref, computed } from 'vue'

export default defineComponent({
  name: 'CalculatorApp',

  setup() {
    const operand1 = ref(0)
    const operand2 = ref(0)
    const operation = ref("sum")

    const result = computed(() => {
      if (operation.value === "sum") {
        return operand1.value + operand2.value
      } else if (operation.value === "subtract") {
        return operand1.value - operand2.value
      } else if (operation.value === "multiply") {
        return operand1.value * operand2.value
      } else if (operation.value === "divide") {
        return operand1.value / operand2.value
      } else {
        return null
      }
    })

    return {
      operand1,
      operand2,
      operation,
      result
    }
  },

  template: `
    <div class="calculator">
      <input type="number" aria-label="First operand" v-model="operand1"/>

      <div class="calculator__operators">
        <label><input type="radio" name="operator" value="sum" v-model="operation"/>➕</label>
        <label><input type="radio" name="operator" value="subtract" v-model="operation"/>➖</label>
        <label><input type="radio" name="operator" value="multiply" v-model="operation"/>✖</label>
        <label><input type="radio" name="operator" value="divide" v-model="operation"/>➗</label>
      </div>

      <input type="number" aria-label="Second operand" v-model="operand2"/>

      <div>=</div>

      <output>{{ result }}</output>
    </div>
  `,
})

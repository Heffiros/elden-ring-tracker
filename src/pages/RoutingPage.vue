<template>
  <div v-if="stepDisplay && (gamepad && gamepad.connected) && loopIsActive" class="stepBlock">
    <div class="text-h2">{{ stepDisplay.title }} ({{ actualIndex }} / {{ routing[actualStep].steps.length }}) </div>
    <div class="text-subtitle1">{{ stepDisplay.steps[actualIndex] }}</div>
  </div>

  <div v-else class="stepBlock">
    <div v-if="!gamepad">
      <div class="text-h2">Appuyez sur une touche de votre manette pour la synchroniser</div>
      <div class="text-subtitle1">Bonne chance</div>
    </div>
    <div v-else-if="(gamepad && gamepad.connected) && !loopIsActive">
      <div class="text-h2">Manette synchronisée</div>
      <div class="text-subtitle1">Appuyez sur Start pour lancer la run</div>
    </div>
  </div>
  <div class="q-pa-md">
    <q-btn color="green" class="full-width" label="Start Run" @click="startGamepadPolling()" />

    <q-btn color="secondary" label="Reset" class="q-mt-md full-width">
      <q-tooltip class="bg-accent" @click="reset()">reset</q-tooltip>
    </q-btn>
  </div>
</template>

<script>
export default {
  data() {
    return {
      gamepadIndex: null,
      gamepad: null,
      routing: null,
      actualStep: 0,
      actualIndex: 0,
      isProcessing: false,
      loopIsActive: false,
      buttonStates: []
    }
  },
  computed: {
    stepDisplay() {
      if (!this.routing) return
      return this.routing[this.actualStep]
    }
  },
  methods: {
    checkGamepadInputs() {
      const gamepads = navigator.getGamepads()
      const gamepad = gamepads[this.gamepadIndex]
      if (gamepad) {
        if (this.buttonStates.length === 0) {
          this.buttonStates = gamepad.buttons.map(() => false)
        }
        gamepad.buttons.forEach((button, index) => {
          const wasPressed = this.buttonStates[index]
          const isPressed = button.pressed
          if (!wasPressed && isPressed) {
            this.handleGamepadButtonPress(index)
          }
          this.buttonStates[index] = isPressed
        })
      }
    },
    handleGamepadButtonPress(buttonIndex) {
      if (this.isProcessing) return
      if (buttonIndex === 10) {
        this.isProcessing = true
        const actualStepMaxIndex = this.routing[this.actualStep].steps.length
        if (this.actualIndex < actualStepMaxIndex - 1) {
          this.actualIndex += 1
        } else {
          this.actualIndex = 0
          this.actualStep += 1
        }
      }
      this.isProcessing = false
    },
    detectGamepadConnection() {
      window.addEventListener('gamepadconnected', (event) => {
        this.gamepadIndex = event.gamepad.index
        this.gamepad = event.gamepad
      })
    },
    startGamepadPolling() {
      this.loopIsActive = true
      const poll = () => {
        this.checkGamepadInputs()
        requestAnimationFrame(poll)
      }
      poll()
    },
    reset() {
      this.actualStep = 0
      this.actualIndex = 0
    }
  },
  async mounted() {
    try {
      const response = await fetch('/routing.json')
      const data = await response.json()
      this.routing = data
    } catch (error) {
      console.error('Erreur lors du chargement des données JSON:', error)
    }
    await this.detectGamepadConnection()
  }
}

</script>

<style scoped>
p {
  font-size: 1.2em;
  color: #333;
}

.stepBlock {
  margin-top: 16px;
  text-align: center;
}
</style>

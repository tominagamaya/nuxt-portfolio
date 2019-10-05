import { storiesOf } from '@storybook/vue'
import ButtonWide from '../components/common/ButtonWide.vue'

storiesOf('ButtonWide', module).add('default', () => ({
  components: { ButtonWide },
  template: `<button-wide></button-wide>`
}))

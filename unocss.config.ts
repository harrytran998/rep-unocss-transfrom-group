import {
  defineConfig,
  presetUno,
  transformerCompileClass,
  transformerVariantGroup,
} from 'unocss';

export default defineConfig({
  transformers: [transformerVariantGroup(), transformerCompileClass()],
  presets: [presetUno()],
});

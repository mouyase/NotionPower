import config from '@/power.config'
import Theme from '@/theme'

const useThemeComponents = () => {
  const ThemeComponents = Theme[config.theme as keyof typeof Theme]
  return { ...ThemeComponents }
}

export default useThemeComponents

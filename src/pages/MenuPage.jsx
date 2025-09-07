import Menu from '../components/features/menu/Menu'
import { Section } from '../components/ui/UI'
import { SmartGoBack } from '../components/common/GoBackButton'
import { useUserPreferences } from '../context/UserPreferencesContext'
import { useTranslation } from '../utils/translations'
import { completeMenu } from '../data/menu'

function MenuPage() {
  // Get user preferences and translation function
  const { preferences } = useUserPreferences()
  const { t } = useTranslation(preferences.language)
  
  // Transform complete menu with translations
  const translatedMenuItems = completeMenu.map(item => ({
    ...item,
    name: t(item.nameKey)
  }))

  return (
    <Section>
      <SmartGoBack />
      <Menu menuItems={translatedMenuItems} />
    </Section>
  )
}

export default MenuPage
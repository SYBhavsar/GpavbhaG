import MenuCard from './MenuCard'
import { Section, SectionTitle, SectionSubtitle, Container, Grid } from '../../ui/UI'
import { useUserPreferences } from '../../../context/UserPreferencesContext'
import { useTranslation } from '../../../utils/translations'

// Menu component - receives menuItems as props from parent
function Menu({ menuItems }) {
  // Get user preferences and translation function
  const { preferences } = useUserPreferences()
  const { t } = useTranslation(preferences.language)
  return (
    <Section>
      {/* Section header */}
      <div className="text-center mb-8">
        <SectionTitle className="text-amber-800">{t('ourMenu')}</SectionTitle>
        <SectionSubtitle>{t('menuSubtitle')}</SectionSubtitle>
      </div>
      
      {/* Menu items grid */}
      <Container className="max-w-6xl">
        <Grid cols="3">
          {/* Loop through menuItems array and create a MenuCard for each item */}
          {menuItems.map((item) => (
            <MenuCard 
              key={item.id}           // Each item needs unique key
              id={item.id}            // Pass id for routing
              name={item.name}        // Pass name prop
              description={item.description}  // Pass description prop
              price={item.price}      // Pass price prop
              image={item.image}      // Pass image prop
              isSpecial={item.isSpecial}  // Pass special flag prop
            />
          ))}
        </Grid>
      </Container>
    </Section>
  )
}

export default Menu
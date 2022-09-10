import { usePrestationsCatalog } from '../../../hooks/usePrestations';
import { PrestationCategoryWrapper } from '../prestation-category-wrapper/PrestationCategoryWrapper';
import { PrestationItem } from '../prestation-item/PrestationItem';
import { PrestationCTA } from '../prestation-cta/PrestationCTA';
import './CategorizedPrestations.css';

export const CategorizedPrestations = () => {
  const { prestations } = usePrestationsCatalog();
  return (
    <div className="CategorizedPrestations">
      {prestations?.categories.map(category => (
        <PrestationCategoryWrapper title={category.title} key={category.reference}>
          <div className="CategorizedPrestations-category-prestationsList">
            {category.prestations.map(prestation => (
              <PrestationItem key={prestation.reference} {...prestation}>
                <PrestationCTA prestation={prestation} />
              </PrestationItem>
            ))}
          </div>
        </PrestationCategoryWrapper>
      ))}
    </div>
  );
};

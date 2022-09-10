import { Category } from '../../../services/prestations.types';
import { FC, ReactNode } from 'react';

type PrestationCategoryWrapperProps = Pick<Category, 'title'> & { children?: ReactNode };
export const PrestationCategoryWrapper: FC<PrestationCategoryWrapperProps> = ({ title, children }) => {
  return (
    <section>
      <h3>{title}</h3>
      {children}
    </section>
  );
};

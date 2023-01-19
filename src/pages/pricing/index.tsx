import DarkLayout from '@/components/layouts/DarkLayout';
import MainLayout from '@/components/layouts/MainLayout';
import { ReactElement } from 'react';

const PricingPage = () => {
  return (
    <div>Pricing page</div>
  )
}

export default PricingPage

PricingPage.getLayout = function getLayout(page: ReactElement) {
    return (
      <MainLayout>
        <DarkLayout>{page}</DarkLayout>
      </MainLayout>
    );
  };


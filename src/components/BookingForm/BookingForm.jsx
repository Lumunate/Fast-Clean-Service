'use client';
import { Box } from '@mui/system';
import useMultiStepForm from '../../hooks/useMultiStepForm';
import LocationSelection from './LocationSelectionStep';
import LiscencePlateStep from './LiscensePlateStep';
import CarTypeStep from './CarTypeStep';
import PackageSelectionStep from './PackageSelectionStep';
import SubscriptionPackagesStep from './SubscriptionPackagesStep';
import AutocarePackagesStep from './AutoCarePackagesStep';
import AdditionalOptionsStep from './AdditonalOptionsStep';
import DetailingStep from './DetailingStep';
import ScheduleAppointmentStep from './ScheduleAppointmentStep';
import SummaryStep from './SummaryStep';
import PersonParticularsStep from './PersonParticularsStep';
import SelectCityStep from './SelectCityStep/SelectLocationInput';

const BookingForm = () => {
  const { currentStep, formData } = useMultiStepForm();

  if (currentStep === 1) return <LocationSelection />;
  else if (currentStep === 2) return <LiscencePlateStep />;
  else if (currentStep === 3) return <CarTypeStep />;
  else if (currentStep === 4) return <PackageSelectionStep />;
  else if (currentStep === 5) return <SubscriptionPackagesStep />;
  else if (
    currentStep === 6 &&
    formData.selectedPackageType === 'Subscription Plans'
  ) {
    // nextStep();
    return null;
  } else if (
    currentStep === 6 &&
    formData.selectedPackageType === 'Anywhere Autocare'
  )
    return <AutocarePackagesStep />;
  else if (currentStep === 7) return <AdditionalOptionsStep />;
  else if (currentStep === 8) return <DetailingStep />;
  else if (currentStep === 9) return <ScheduleAppointmentStep />;
  else if (currentStep === 10) return <SummaryStep />;
  else if (currentStep === 11) return <PersonParticularsStep />;

  return <Box>Undefined</Box>;
};

export default BookingForm;

// SPDX-FileCopyrightText: Copyright Orangebot, Inc. and Medplum contributors
// SPDX-License-Identifier: Apache-2.0
import { Alert, Button, Stack, Text, Title } from '@mantine/core';
import { createReference } from '@medplum/core';
import type { Patient, Questionnaire, QuestionnaireResponse } from '@medplum/fhirtypes';
import { Document, QuestionnaireForm, useMedplum } from '@medplum/react';
import { IconCircleCheck } from '@tabler/icons-react';
import { useState } from 'react';
import type { JSX } from 'react';
import { useNavigate } from 'react-router';

export function PatientIntakeQuestionnairePage(): JSX.Element {
  const medplum = useMedplum();
  const navigate = useNavigate();
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState<string | undefined>();

  async function handleQuestionnaireSubmit(formData: QuestionnaireResponse): Promise<void> {
    try {
      const profile = medplum.getProfile() as Patient | undefined;
      await medplum.createResource<QuestionnaireResponse>({
        ...formData,
        subject: profile ? createReference(profile) : undefined,
      });
      setIsSubmitted(true);
      window.scrollTo(0, 0);
    } catch {
      setError('There was a problem saving your form. Please try again or call the office.');
    }
  }

  return (
    <Document width={800}>
      {isSubmitted ? (
        <Stack align="center" gap="lg" py="xl">
          <IconCircleCheck size={64} color="var(--mantine-color-gold-8)" />
          <Title order={2} fw={500}>
            We received your intake form.
          </Title>
          <Text c="dimmed" ta="center" maw={480}>
            Dr. Star's team will review your information before your appointment. If you have any questions in the
            meantime, send us a message through the portal.
          </Text>
          <Button onClick={() => navigate('/')?.catch(console.error)}>Back to home</Button>
        </Stack>
      ) : (
        <>
          {error && (
            <Alert color="red" mb="md" title="Submission error">
              {error}
            </Alert>
          )}
          <QuestionnaireForm questionnaire={questionnaire} onSubmit={handleQuestionnaireSubmit} />
        </>
      )}
    </Document>
  );
}

const questionnaire: Questionnaire = {
  resourceType: 'Questionnaire',
  status: 'active',
  title: 'New Patient Intake Form',
  name: 'patient-intake',
  item: [
    {
      linkId: 'functional-medicine',
      text: 'About Your Health',
      type: 'group',
      item: [
        {
          linkId: 'chief-complaint',
          text: 'What is your primary reason for seeking care today?',
          type: 'text',
          required: true,
        },
        {
          linkId: 'health-goals',
          text: 'What are your top health goals? (Please list up to three)',
          type: 'text',
        },
        {
          linkId: 'health-duration',
          text: 'How long have you been dealing with your main health concern?',
          type: 'choice',
          answerOption: [
            { valueCoding: { code: 'lt1mo', display: 'Less than a month' } },
            { valueCoding: { code: '1-6mo', display: '1-6 months' } },
            { valueCoding: { code: '6-12mo', display: '6-12 months' } },
            { valueCoding: { code: '1-5yr', display: '1-5 years' } },
            { valueCoding: { code: 'gt5yr', display: 'More than 5 years' } },
          ],
        },
        {
          linkId: 'supplements',
          text: 'Current supplements, herbs, or vitamins (name, dose, frequency)',
          type: 'text',
        },
        {
          linkId: 'diet-description',
          text: 'How would you describe your typical daily diet?',
          type: 'choice',
          answerOption: [
            { valueCoding: { code: 'omnivore', display: 'Omnivore (meat, dairy, grains, vegetables)' } },
            { valueCoding: { code: 'vegetarian', display: 'Vegetarian' } },
            { valueCoding: { code: 'vegan', display: 'Vegan' } },
            { valueCoding: { code: 'gf', display: 'Gluten-free' } },
            { valueCoding: { code: 'paleo', display: 'Paleo / grain-free' } },
            { valueCoding: { code: 'keto', display: 'Ketogenic / low-carb' } },
            { valueCoding: { code: 'other', display: 'Other / mixed' } },
          ],
        },
        {
          linkId: 'sleep-hours',
          text: 'On average, how many hours of sleep do you get per night?',
          type: 'choice',
          answerOption: [
            { valueCoding: { code: 'lt5', display: 'Less than 5 hours' } },
            { valueCoding: { code: '5-6', display: '5-6 hours' } },
            { valueCoding: { code: '7-8', display: '7-8 hours' } },
            { valueCoding: { code: 'gt8', display: 'More than 8 hours' } },
          ],
        },
        {
          linkId: 'sleep-quality',
          text: 'How would you rate your sleep quality?',
          type: 'choice',
          answerOption: [
            { valueCoding: { code: 'poor', display: 'Poor: I rarely feel rested' } },
            { valueCoding: { code: 'fair', display: 'Fair: some nights are good' } },
            { valueCoding: { code: 'good', display: 'Good: mostly restful' } },
            { valueCoding: { code: 'excellent', display: 'Excellent: I sleep well consistently' } },
          ],
        },
        {
          linkId: 'stress-level',
          text: 'How would you rate your current overall stress level?',
          type: 'choice',
          answerOption: [
            { valueCoding: { code: 'low', display: 'Low: mostly calm' } },
            { valueCoding: { code: 'moderate', display: 'Moderate: manageable' } },
            { valueCoding: { code: 'high', display: 'High: often overwhelming' } },
            { valueCoding: { code: 'very-high', display: 'Very high: chronic stress' } },
          ],
        },
        {
          linkId: 'prior-naturopathic',
          text: 'Have you seen a naturopathic or functional medicine provider before?',
          type: 'boolean',
        },
        {
          linkId: 'how-heard',
          text: 'How did you hear about Dr. Star NMD?',
          type: 'choice',
          answerOption: [
            { valueCoding: { code: 'referral', display: 'Referred by a friend or family member' } },
            { valueCoding: { code: 'provider', display: 'Referred by another provider' } },
            { valueCoding: { code: 'google', display: 'Google search' } },
            { valueCoding: { code: 'social', display: 'Social media' } },
            { valueCoding: { code: 'website', display: 'drstarnmd.com' } },
            { valueCoding: { code: 'other', display: 'Other' } },
          ],
        },
      ],
    },
    {
      linkId: 'patient-demographics',
      text: 'Demographics',
      type: 'group',
      item: [
        {
          linkId: 'first-name',
          text: 'First Name',
          type: 'string',
          required: true,
        },
        {
          linkId: 'middle-name',
          text: 'Middle Name',
          type: 'string',
        },
        {
          linkId: 'last-name',
          text: 'Last Name',
          type: 'string',
          required: true,
        },
        {
          linkId: 'dob',
          text: 'Date of Birth',
          type: 'date',
        },
        {
          linkId: 'street',
          text: 'Street',
          type: 'string',
        },
        {
          linkId: 'city',
          text: 'City',
          type: 'string',
        },
        {
          linkId: 'state',
          text: 'State',
          type: 'choice',
          answerValueSet: 'http://hl7.org/fhir/us/core/ValueSet/us-core-usps-state',
        },
        {
          linkId: 'zip',
          text: 'Zip',
          type: 'string',
        },
        {
          linkId: 'phone',
          text: 'Phone',
          type: 'string',
        },
        {
          linkId: 'ssn',
          text: 'Social Security Number',
          type: 'string',
          required: true,
        },
        {
          linkId: 'race',
          text: 'Race',
          type: 'choice',
          answerValueSet: 'http://hl7.org/fhir/us/core/ValueSet/omb-race-category',
        },
        {
          linkId: 'ethnicity',
          text: 'Ethnicity',
          type: 'choice',
          answerValueSet: 'http://hl7.org/fhir/us/core/ValueSet/omb-ethnicity-category',
        },
        {
          linkId: 'gender-identity',
          text: 'Gender Identity',
          type: 'choice',
          answerValueSet: 'http://cts.nlm.nih.gov/fhir/ValueSet/2.16.840.1.113762.1.4.1021.32',
        },
        {
          linkId: 'sexual-orientation',
          text: 'Sexual Orientation',
          type: 'choice',
          answerValueSet: 'http://hl7.org/fhir/us/core/ValueSet/us-core-sexual-orientation',
        },
      ],
    },
    {
      linkId: 'emergency-contact',
      text: 'Emergency Contact',
      type: 'group',
      repeats: true,
      item: [
        {
          linkId: 'emergency-contact-first-name',
          text: 'First Name',
          type: 'string',
        },
        {
          linkId: 'emergency-contact-middle-name',
          text: 'Middle Name',
          type: 'string',
        },
        {
          linkId: 'emergency-contact-last-name',
          text: 'Last Name',
          type: 'string',
        },
        {
          linkId: 'emergency-contact-phone',
          text: 'Phone',
          type: 'string',
        },
      ],
    },
    {
      linkId: 'allergies',
      text: 'Allergies',
      type: 'group',
      repeats: true,
      item: [
        {
          linkId: 'allergy-substance',
          text: 'Substance',
          type: 'choice',
          answerValueSet: 'http://cts.nlm.nih.gov/fhir/ValueSet/2.16.840.1.113762.1.4.1186.8',
        },
        {
          linkId: 'allergy-reaction',
          text: 'Reaction',
          type: 'string',
        },
        {
          linkId: 'allergy-onset',
          text: 'Onset',
          type: 'dateTime',
        },
      ],
    },
    {
      linkId: 'medications',
      text: 'Current Medications',
      type: 'group',
      repeats: true,
      item: [
        {
          linkId: 'medication-code',
          text: 'Medication Name',
          type: 'choice',
          answerValueSet: 'http://cts.nlm.nih.gov/fhir/ValueSet/2.16.840.1.113762.1.4.1010.4',
        },
        {
          linkId: 'medication-note',
          text: 'Note (dose, frequency)',
          type: 'string',
        },
      ],
    },
    {
      linkId: 'medical-history',
      text: 'Medical History',
      type: 'group',
      repeats: true,
      item: [
        {
          linkId: 'medical-history-problem',
          text: 'Problem',
          type: 'choice',
          answerValueSet: 'http://hl7.org/fhir/us/core/ValueSet/us-core-condition-code',
        },
        {
          linkId: 'medical-history-clinical-status',
          text: 'Status',
          type: 'choice',
          answerValueSet: 'http://hl7.org/fhir/ValueSet/condition-clinical',
        },
        {
          linkId: 'medical-history-onset',
          text: 'Onset',
          type: 'dateTime',
        },
      ],
    },
    {
      linkId: 'family-member-history',
      text: 'Family Member History',
      type: 'group',
      repeats: true,
      item: [
        {
          linkId: 'family-member-history-problem',
          text: 'Problem',
          type: 'choice',
          answerValueSet: 'http://hl7.org/fhir/us/core/ValueSet/us-core-condition-code',
        },
        {
          linkId: 'family-member-history-relationship',
          text: 'Relationship',
          type: 'choice',
          answerValueSet: 'http://terminology.hl7.org/ValueSet/v3-FamilyMember',
        },
        {
          linkId: 'family-member-history-deceased',
          text: 'Deceased',
          type: 'boolean',
        },
      ],
    },
    {
      linkId: 'vaccination-history',
      text: 'Vaccination History',
      type: 'group',
      repeats: true,
      item: [
        {
          linkId: 'immunization-vaccine',
          text: 'Vaccine',
          type: 'choice',
          answerValueSet: 'http://cts.nlm.nih.gov/fhir/ValueSet/2.16.840.1.113762.1.4.1010.6',
        },
        {
          linkId: 'immunization-date',
          text: 'Administration Date',
          type: 'dateTime',
        },
      ],
    },
    {
      linkId: 'social-determinants-of-health',
      text: 'Social Determinants of Health',
      type: 'group',
      item: [
        {
          linkId: 'housing-status',
          text: 'Housing Status',
          type: 'choice',
          answerValueSet: 'http://terminology.hl7.org/ValueSet/v3-LivingArrangement',
        },
        {
          linkId: 'education-level',
          text: 'Education Level',
          type: 'choice',
          answerValueSet: 'http://terminology.hl7.org/ValueSet/v3-EducationLevel',
        },
        {
          linkId: 'smoking-status',
          text: 'Smoking Status',
          type: 'choice',
          answerValueSet: 'http://cts.nlm.nih.gov/fhir/ValueSet/2.16.840.1.113883.11.20.9.38',
        },
        {
          linkId: 'veteran-status',
          text: 'Veteran Status',
          type: 'boolean',
        },
        {
          linkId: 'pregnancy-status',
          text: 'Pregnancy Status',
          type: 'choice',
          code: [
            {
              code: '82810-3',
              display: 'Pregnancy status',
              system: 'http://loinc.org',
            },
          ],
          answerValueSet: 'http://example.com/pregnancy-status',
        },
        {
          linkId: 'estimated-delivery-date',
          text: 'Estimated Delivery Date',
          type: 'date',
          code: [
            {
              code: '11778-8',
              display: 'Estimated date of delivery',
              system: 'http://loinc.org',
            },
          ],
          enableWhen: [
            {
              question: 'pregnancy-status',
              operator: '=',
              answerCoding: {
                system: 'http://snomed.info/sct',
                code: '77386006',
                display: 'Pregnancy',
              },
            },
          ],
        },
      ],
    },
    {
      linkId: 'languages-spoken',
      text: 'Languages Spoken',
      type: 'choice',
      answerValueSet: 'http://hl7.org/fhir/ValueSet/languages',
      repeats: true,
    },
    {
      linkId: 'preferred-language',
      text: 'Preferred Language',
      type: 'choice',
      answerValueSet: 'http://hl7.org/fhir/ValueSet/languages',
    },
    {
      linkId: 'consent-for-treatment',
      text: 'Consent for Treatment',
      type: 'group',
      item: [
        {
          linkId: 'consent-for-treatment-signature',
          text: 'I the undersigned patient (or authorized representative, or parent/guardian), consent to and authorize the performance of any treatments, examinations, medical services, and diagnostic procedures, including lab and radiographic studies, as ordered by Dr. Star NMD, PLLC and its healthcare providers.',
          type: 'boolean',
        },
        {
          linkId: 'consent-for-treatment-date',
          text: 'Date',
          type: 'date',
        },
      ],
    },
    {
      linkId: 'agreement-to-pay-for-treatment',
      text: 'Agreement to Pay for Treatment',
      type: 'group',
      item: [
        {
          linkId: 'agreement-to-pay-for-treatment-help',
          text: 'I, the responsible party, hereby agree to pay all charges submitted by Dr. Star NMD, PLLC during the course of treatment for the patient. Dr. Star NMD is a cash-pay naturopathic practice; payment is expected at the time of service. If the patient has applicable insurance coverage, it is the patient\'s responsibility to seek any reimbursement directly from their insurer. I understand that financial hardship arrangements may be discussed with the office on a case-by-case basis.',
          type: 'boolean',
        },
        {
          linkId: 'agreement-to-pay-for-treatment-date',
          text: 'Date',
          type: 'date',
        },
      ],
    },
    {
      linkId: 'notice-of-privacy-practices',
      text: 'Notice of Privacy Practices',
      type: 'group',
      item: [
        {
          linkId: 'notice-of-privacy-practices-help',
          text: 'Dr. Star NMD, PLLC Notice of Privacy Practices gives information about how the practice may use and release your protected health information (PHI). I understand that:\n- I have the right to receive a copy of Dr. Star NMD, PLLC’s Notice of Privacy Practices.\n- I may request a copy at any time.\n- The Notice of Privacy Practices may be revised.',
          type: 'display',
        },
        {
          linkId: 'notice-of-privacy-practices-signature',
          text: 'I acknowledge the above and that I have received a copy of Dr. Star NMD, PLLC’s Notice of Privacy Practices.',
          type: 'boolean',
        },
        {
          linkId: 'notice-of-privacy-practices-date',
          text: 'Date',
          type: 'date',
        },
      ],
    },
    {
      linkId: 'acknowledgement-for-advance-directives',
      text: 'Acknowledgement for Advance Directives',
      type: 'group',
      item: [
        {
          linkId: 'acknowledgement-for-advance-directives-help',
          text: 'An Advance Medical Directive is a document by which a person makes provision for health care decisions in the event that, in the future, they become unable to make those decisions.',
          type: 'display',
        },
        {
          linkId: 'acknowledgement-for-advance-directives-signature',
          text: 'I acknowledge I have received information about Advance Directives.',
          type: 'boolean',
        },
        {
          linkId: 'acknowledgement-for-advance-directives-date',
          text: 'Date',
          type: 'date',
        },
      ],
    },
  ],
};

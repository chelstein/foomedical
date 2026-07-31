// SPDX-FileCopyrightText: Copyright Orangebot, Inc. and Medplum contributors
// SPDX-License-Identifier: Apache-2.0

export interface ServiceData {
  slug: string;
  title: string;
  tagline: string;
  description: string;
  whatToExpect: string[];
  conditions: string[];
}

export const services: ServiceData[] = [
  {
    slug: 'functional-medicine',
    title: 'Functional Medicine',
    tagline: 'Root-cause evaluation and whole-person treatment',
    description:
      'Dr. Star approaches each patient with a whole-body perspective, investigating the underlying root causes of health issues rather than managing symptoms alone. Through comprehensive lab work, detailed health histories, and an understanding of how lifestyle, nutrition, and emotional health interact, she creates personalized treatment plans designed to restore balance and long-term wellness.',
    whatToExpect: [
      'Initial consultation of 60-90 minutes covering your full health history',
      'Comprehensive functional lab work including markers rarely ordered in conventional care',
      'A personalized treatment plan addressing root causes, not just symptoms',
      'Ongoing follow-ups to track progress and adjust your protocol',
    ],
    conditions: [
      'Fatigue and low energy',
      'Digestive disorders',
      'Autoimmune conditions',
      'Hormonal imbalance',
      'Chronic pain and inflammation',
      'Mood and cognitive concerns',
    ],
  },
  {
    slug: 'food-allergy-testing',
    title: 'Food Allergy Testing & Gut Repair',
    tagline: 'Identify what is driving your symptoms and heal the source',
    description:
      'Digestive health is the foundation of overall wellness. Dr. Star uses advanced food sensitivity and allergy testing to identify what is triggering your symptoms, from bloating and fatigue to skin issues and joint pain. The gut-repair protocol that follows is targeted to your specific results and guided by evidence-based natural medicine.',
    whatToExpect: [
      'IgG and IgE food sensitivity and allergy panels',
      'Gut microbiome and permeability assessment as indicated',
      'A targeted elimination and gut-repair protocol based on your results',
      'Nutritional guidance to rebuild a healthy, balanced gut',
    ],
    conditions: [
      'Bloating, gas, and IBS',
      'Food sensitivities and intolerances',
      'Leaky gut syndrome',
      'Skin conditions linked to gut health',
      'Fatigue after eating',
      'Chronic inflammation',
    ],
  },
  {
    slug: 'weight-loss',
    title: 'Weight Loss - Peptides & GLP-1s',
    tagline: 'Evidence-based weight management with peptide therapy',
    description:
      'Dr. Star addresses the hormonal, metabolic, and lifestyle factors driving weight gain rather than applying a one-size-fits-all approach. Peptide therapy and GLP-1 protocols are combined with personalized nutritional guidance, lab monitoring, and ongoing support to help you achieve and maintain a healthy weight in a way that works for your body.',
    whatToExpect: [
      'Metabolic and hormonal lab evaluation before starting any protocol',
      'A personalized peptide or GLP-1 program matched to your physiology',
      'Nutritional and lifestyle coaching alongside medical therapy',
      'Regular monitoring and protocol adjustments as you progress',
    ],
    conditions: [
      'Stubborn weight that does not respond to diet and exercise',
      'Metabolic syndrome',
      'Insulin resistance',
      'Hormonal weight gain',
      'Post-menopausal weight changes',
      'Weight plateaus',
    ],
  },
  {
    slug: 'hormone-testing',
    title: 'Hormone Testing & Balancing',
    tagline: 'Comprehensive panels and personalized balancing for men and women',
    description:
      'Hormonal imbalances affect mood, energy, weight, sleep, and reproductive health. Dr. Star offers comprehensive hormone panels for men and women at every stage of life, from puberty through menopause and andropause, and creates individualized balancing protocols using bioidentical hormones, adaptogens, and targeted nutritional support.',
    whatToExpect: [
      'Full hormone panel including sex hormones, thyroid, adrenal, and metabolic markers',
      'Symptom-based assessment alongside lab findings',
      'A personalized balancing protocol using bioidentical or botanical approaches',
      'Follow-up testing to confirm and refine your treatment',
    ],
    conditions: [
      'PMS and menstrual irregularities',
      'Perimenopause and menopause',
      'Low testosterone and andropause',
      'Thyroid dysfunction',
      'Adrenal fatigue and burnout',
      'Mood swings and brain fog',
    ],
  },
  {
    slug: 'iv-therapies',
    title: 'IV Therapies & Vitamin Shots',
    tagline: 'Nutrient infusions for energy, immunity, and recovery',
    description:
      'Intravenous nutrient therapy delivers vitamins, minerals, and antioxidants directly into the bloodstream for immediate absorption and effectiveness. Dr. Star offers a range of evidence-based infusion protocols for immune support, energy recovery, athletic performance, detoxification, and anti-aging.',
    whatToExpect: [
      'A brief intake to match you to the right infusion protocol',
      'In-office IV therapy in a comfortable, private setting',
      'Vitamin B12, Myers cocktail, glutathione, NAD+, and custom formulations',
      'Quick-turnaround vitamin shots for immune and energy support between appointments',
    ],
    conditions: [
      'Chronic fatigue',
      'Immune deficiency and frequent illness',
      'Athletic recovery',
      'Hangover recovery',
      'Detoxification support',
      'Anti-aging and longevity',
    ],
  },
  {
    slug: 'annual-checkups',
    title: 'Annual Check Ups & Physicals',
    tagline: 'Comprehensive exams with functional diagnostic lab work',
    description:
      'Preventive care is central to naturopathic medicine. Dr. Star\'s annual physicals go beyond standard screenings to include functional lab work, nutritional assessment, hormonal evaluation, and a review of your full health picture, giving you a complete baseline and a personalized plan for the year ahead.',
    whatToExpect: [
      'Full physical examination with vital signs and body composition',
      'Comprehensive blood panel beyond standard CBC and metabolic panel',
      'Review of diet, sleep, stress, and lifestyle factors',
      'A personalized prevention and optimization plan',
    ],
    conditions: [
      'General health maintenance',
      'Early detection of metabolic changes',
      'Cardiovascular risk assessment',
      'Nutritional deficiency screening',
      'Hormonal baseline tracking',
      'Wellness optimization',
    ],
  },
  {
    slug: 'nutritional-counseling',
    title: 'Nutritional Counseling',
    tagline: 'Personalized diet and lifestyle guidance for lasting results',
    description:
      'Food is medicine. Dr. Star works with each patient to develop a personalized nutrition plan based on their health goals, food sensitivities, metabolic type, and lifestyle. Guidance covers meal planning, supplementation, anti-inflammatory eating, and therapeutic diets tailored to specific conditions.',
    whatToExpect: [
      'A detailed dietary assessment covering what, when, and how you eat',
      'Personalized nutrition recommendations aligned with your health goals',
      'Supplement protocol based on labs and identified deficiencies',
      'Practical meal planning support and ongoing accountability',
    ],
    conditions: [
      'Weight management',
      'Blood sugar regulation',
      'Inflammation and chronic disease',
      'Athletic performance and recovery',
      'Digestive health',
      'Mood and cognitive support through nutrition',
    ],
  },
  {
    slug: 'acupuncture',
    title: 'TCM: Acupuncture, Cupping & Gua Sha',
    tagline: 'Traditional Chinese medicine as part of integrative care',
    description:
      'Traditional Chinese Medicine (TCM) has been used for thousands of years to restore energy flow, reduce pain, and promote healing. Dr. Star integrates acupuncture, cupping, and gua sha into her naturopathic practice as part of a holistic, integrative approach for a wide range of conditions, from pain and stress to digestive and hormonal concerns.',
    whatToExpect: [
      'A TCM intake covering your constitution, pulse, and tongue diagnosis',
      'Acupuncture treatment targeting your specific meridians and health goals',
      'Cupping and gua sha as appropriate for pain, circulation, and detoxification',
      'Integration with your broader naturopathic treatment plan',
    ],
    conditions: [
      'Chronic and acute pain',
      'Stress, anxiety, and insomnia',
      'Digestive complaints',
      'Hormonal regulation',
      'Headaches and migraines',
      'Immune and respiratory support',
    ],
  },
  {
    slug: 'physical-medicine',
    title: 'Physical Medicine & Bodywork',
    tagline: 'Hands-on therapies for pain, circulation, and recovery',
    description:
      'Dr. Star integrates physical medicine and bodywork into naturopathic care to address musculoskeletal pain, lymphatic congestion, and nervous system regulation. Modalities include lymphatic detox massage, deep myofascial tissue therapy, constitutional hydrotherapy, wet sheet wraps, trigger point injections, acupuncture, cupping, gua sha, and hot stone grounding — selected based on your individual presentation and treatment goals.',
    whatToExpect: [
      'An intake covering your pain patterns, circulation, and musculoskeletal history',
      'Hands-on treatment tailored to your specific presentation',
      'A combination of modalities chosen for your body and goals',
      'Integration with your broader naturopathic treatment plan',
    ],
    conditions: [
      'Chronic and acute musculoskeletal pain',
      'Lymphatic congestion and edema',
      'Fibromyalgia and widespread pain',
      'Post-injury or post-surgical recovery',
      'Nervous system dysregulation',
      'Inflammation and restricted range of motion',
    ],
  },
  {
    slug: 'womens-wellness',
    title: "Women's Wellness Exams",
    tagline: 'Comprehensive preventive care tailored for women',
    description:
      "Dr. Star's women's wellness exams go beyond the standard annual visit to include a comprehensive physical examination, hormonal assessment, reproductive health review, and personalized preventive care planning. Whether you are maintaining your health, navigating a transition, or addressing a specific concern, the exam is designed around the full picture of your wellbeing.",
    whatToExpect: [
      'Full physical examination including breast and pelvic assessment as indicated',
      'Hormonal and reproductive health evaluation',
      'Screening for cardiovascular, metabolic, and nutritional risk factors',
      'A personalized preventive care plan with actionable next steps',
    ],
    conditions: [
      'Annual wellness and preventive care',
      'Contraceptive counseling',
      'Menstrual irregularities and cycle concerns',
      'Perimenopause and menopause management',
      'Hormonal imbalance',
      'Reproductive and pelvic health',
    ],
  },
  {
    slug: 'prp-peptides',
    title: 'PRP & Peptide Injections',
    tagline: 'Regenerative therapies for healing and performance',
    description:
      "Platelet Rich Plasma (PRP) therapy uses your own blood's growth factors to accelerate healing in joints, tendons, and soft tissue. Peptide injections are used therapeutically to support recovery, hormone regulation, weight management, immune function, and anti-aging goals. Dr. Star selects and administers these therapies as part of a comprehensive treatment plan, not as standalone procedures.",
    whatToExpect: [
      'A thorough evaluation to determine whether PRP or peptide therapy is appropriate for your goals',
      'In-office blood draw and centrifugation for PRP preparation',
      'Guided injection under appropriate clinical technique',
      'A recovery and follow-up plan to optimize your results',
    ],
    conditions: [
      'Joint pain and osteoarthritis',
      'Tendon and ligament injuries',
      'Recovery optimization and anti-aging',
      'Hormonal support through peptide protocols',
      'Weight management with peptide therapy',
      'Immune and metabolic support',
    ],
  },
];

export function getServiceBySlug(slug: string): ServiceData | undefined {
  return services.find((s) => s.slug === slug);
}

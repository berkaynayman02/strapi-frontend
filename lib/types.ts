export interface Feature {
  id: number;
  Title: string;
  Description: string;
}

export interface HomePageData {
  id: number;
  documentId: string;
  Features: Feature[];
  WhyChooseUsTitle: string;
  WhyChooseUsSubTitle: string;
  WhyChooseUsSectionName: string;
  WhyChooseUsImage: any;
  createdAt: Date;
  updatedAt: Date;
}

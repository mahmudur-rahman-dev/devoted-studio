// Project data structure with detailed information for project detail pages

export type Category = 'residential' | 'commercial' | 'architectural' | 'construction';

export interface ProjectImage {
  src: string;
  alt: string;
}

export interface ProjectDetails {
  id: number;
  title: string;
  category: Category;
  location: string;
  size: string;
  scope: string;
  completionDate: string;
  description?: string;
  images: ProjectImage[];
  otherProjects?: {
    id: number;
    title: string;
    imageUrl: string;
  }[];
}

// Sample project data
export const projectsData: ProjectDetails[] = [
  {
    id: 1,
    title: 'Milvik BD',
    category: 'commercial',
    location: 'Mohakhali C/A',
    size: '2700 sft',
    scope: 'Design & Build',
    completionDate: '2022',
    description: 'Milvik Bangladesh office space designed with modern aesthetics and functional workspace solutions.',
    images: [
      {
        src: 'https://ext.same-assets.com/2467244055/3415819004.webp',
        alt: 'Milvik 01'
      },
      {
        src: 'https://ext.same-assets.com/2467244055/2651771610.webp',
        alt: 'Milvik 03'
      },
      {
        src: 'https://ext.same-assets.com/2467244055/1027466583.webp',
        alt: 'Milvik 02'
      },
      {
        src: 'https://ext.same-assets.com/2467244055/2776329165.webp',
        alt: 'Milvik 05'
      },
      {
        src: 'https://ext.same-assets.com/2467244055/2272285116.webp',
        alt: 'Milvik 04'
      },
      {
        src: 'https://ext.same-assets.com/2467244055/1730112613.webp',
        alt: 'Milvik 08'
      },
      {
        src: 'https://ext.same-assets.com/2467244055/959709640.webp',
        alt: 'Milvik 06'
      },
      {
        src: 'https://ext.same-assets.com/2467244055/1766968019.webp',
        alt: 'Milvik 07'
      }
    ],
    otherProjects: [
      {
        id: 9,
        title: 'Sea Resource Group | Chattogram',
        imageUrl: 'https://placehold.co/600x400?text=Sea+Resource'
      },
      {
        id: 12,
        title: 'Project Engineering Consulting Engineers Ltd.',
        imageUrl: 'https://placehold.co/600x400?text=Engineering+Consulting'
      },
      {
        id: 14,
        title: 'Bangabandhu & Bangladesh | Chuadanga Police Lines',
        imageUrl: 'https://placehold.co/600x400?text=Bangabandhu'
      }
    ]
  },
  {
    id: 2,
    title: '3676sft Duplex | Bashundhara',
    category: 'residential',
    location: 'Bashundhara R/A',
    size: '3676 sft',
    scope: 'Interior Design',
    completionDate: '2023',
    images: [
      {
        src: 'https://placehold.co/600x400?text=Duplex+Bashundhara',
        alt: 'Duplex Bashundhara'
      }
    ]
  },
  {
    id: 3,
    title: '3040sqft Flat | Chattogram',
    category: 'residential',
    location: 'Chattogram',
    size: '3040 sqft',
    scope: 'Interior Design',
    completionDate: '2023',
    images: [
      {
        src: 'https://placehold.co/600x400?text=Flat+Chattogram',
        alt: 'Flat Chattogram'
      }
    ]
  },
  {
    id: 9,
    title: 'Sea Resource Group | Chattogram',
    category: 'commercial',
    location: 'Chattogram',
    size: '5200 sft',
    scope: 'Design & Build',
    completionDate: '2021',
    images: [
      {
        src: 'https://placehold.co/600x400?text=Sea+Resource',
        alt: 'Sea Resource Group'
      }
    ]
  },
  {
    id: 12,
    title: 'Project Engineering Consulting Engineers Ltd.',
    category: 'commercial',
    location: 'Dhaka',
    size: '1800 sft',
    scope: 'Design & Build',
    completionDate: '2022',
    images: [
      {
        src: 'https://placehold.co/600x400?text=Engineering+Consulting',
        alt: 'Project Engineering Consulting'
      }
    ]
  },
  {
    id: 14,
    title: 'Bangabandhu & Bangladesh | Chuadanga Police Lines',
    category: 'commercial',
    location: 'Chuadanga',
    size: '3500 sft',
    scope: 'Design & Build',
    completionDate: '2021',
    images: [
      {
        src: 'https://placehold.co/600x400?text=Bangabandhu',
        alt: 'Bangabandhu & Bangladesh'
      }
    ]
  }
];

// Helper function to get project by ID
export const getProjectById = (id: number): ProjectDetails | undefined => {
  return projectsData.find(project => project.id === id);
};

// Helper function to get other projects from the same category
export const getRelatedProjects = (categoryType: Category, currentId: number, limit: number = 3): ProjectDetails[] => {
  return projectsData
    .filter(project => project.category === categoryType && project.id !== currentId)
    .slice(0, limit);
};

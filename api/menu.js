export default function handler(req, res) {
  const menu = {
    id: "summit-athletics-menu",
    title: "Summit Athletics Collective Menu",
    author: "Summit Athletics",
    description: "Main navigation menu for Summit Athletics Collective",
    license: "by-sa",
    metadata: {},
    items: [
      {
        id: "home",
        indent: 0,
        location: "/",
        slug: "home",
        order: 0,
        parent: null,
        title: "Home",
        description: "Homepage - Latest news and upcoming events"
      },
      {
        id: "programs",
        indent: 0,
        location: "/programs",
        slug: "programs",
        order: 1,
        parent: null,
        title: "Programs",
        description: "Our youth sports programs"
      },
      {
        id: "programs-hockey",
        indent: 1,
        location: "/programs#hockey",
        slug: "hockey",
        order: 0,
        parent: "programs",
        title: "Hockey",
        description: "Ice hockey programs for ages 6-18"
      },
      {
        id: "programs-soccer",
        indent: 1,
        location: "/programs#soccer",
        slug: "soccer",
        order: 1,
        parent: "programs",
        title: "Soccer",
        description: "Soccer programs for ages 6-18"
      },
      {
        id: "programs-basketball",
        indent: 1,
        location: "/programs#basketball",
        slug: "basketball",
        order: 2,
        parent: "programs",
        title: "Basketball",
        description: "Basketball programs for ages 6-18"
      },
      {
        id: "programs-lacrosse",
        indent: 1,
        location: "/programs#lacrosse",
        slug: "lacrosse",
        order: 3,
        parent: "programs",
        title: "Lacrosse",
        description: "Lacrosse programs for ages 6-18"
      },
      {
        id: "schedule",
        indent: 0,
        location: "/schedule",
        slug: "schedule",
        order: 2,
        parent: null,
        title: "Schedule",
        description: "Game and practice schedules"
      },
      {
        id: "parent-info",
        indent: 0,
        location: "/parent-info",
        slug: "parent-info",
        order: 3,
        parent: null,
        title: "Parent Info",
        description: "Resources and information for parents"
      },
      {
        id: "parent-getting-started",
        indent: 1,
        location: "/parent-info#getting-started",
        slug: "getting-started",
        order: 0,
        parent: "parent-info",
        title: "Getting Started",
        description: "How to get your child involved"
      },
      {
        id: "parent-faqs",
        indent: 1,
        location: "/parent-info#faqs",
        slug: "faqs",
        order: 1,
        parent: "parent-info",
        title: "FAQs",
        description: "Frequently asked questions"
      },
      {
        id: "parent-policies",
        indent: 1,
        location: "/parent-info#policies",
        slug: "policies",
        order: 2,
        parent: "parent-info",
        title: "Policies",
        description: "Our policies and expectations"
      },
      {
        id: "parent-volunteer",
        indent: 1,
        location: "/parent-info#volunteer",
        slug: "volunteer",
        order: 3,
        parent: "parent-info",
        title: "Volunteer",
        description: "Get involved as a volunteer"
      }
    ]
  };
  
  res.status(200).json(menu);
}

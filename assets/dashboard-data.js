window.DASHBOARD_DATA = {
  "settings": {
    "dashboard_title": "داشبورد مدیریتی پروژه ماهان شهروند کرج",
    "organization_name": "مهندسین مشاور پارس پرنون",
    "updated_at": "تیر ۱۴۰۵",
    "version": "نسخه ۱.۰"
  },
  "pages": [
    {
      "page_id": "design",
      "title": "طراحی",
      "subtitle": "مدیریت اسناد، مطالعات و نقشه‌های طراحی",
      "icon": "briefcase-business",
      "order": 1,
      "enabled": true,
      "sections": [
        {
          "section_id": "design_service",
          "title": "1- شرح خدمات مطالعات",
          "order": 1,
          "default_open": true,
          "attachments": [
            { "title": "قرارداد طراحی", "file_name": "mahan_contract_design.pdf" }
          ]
        },
        {
          "section_id": "design_phase1",
          "title": "2- مطالعات مرحله اول",
          "order": 2,
          "default_open": false,
          "texts": [
            { "title": "معماری", "body": "نقشه‌های مقدماتی + رندرهای 3D" },
            { "title": "سازه", "body": "نقشه‌های مقدماتی سازه" },
            { "title": "تاسیسات", "body": "نقشه‌های نهایی مکانیکی و برقی" }
          ],
          "attachments": [
            { "title": "نقشه‌های مرحله اول", "file_name": "phase1_plans.pdf", "description": "مجموعه نقشه‌های مرحله اول معماری و سازه" }
          ]
        },
        {
          "section_id": "design_phase2",
          "title": "3- مطالعات مرحله دوم",
          "order": 3,
          "default_open": false,
          "texts": [
            { "title": "معماری و سازه", "body": "نقشه‌های نهایی + دفترچه محاسبات + آزمایش ژئوتکنیک" },
            { "title": "تاسیسات", "body": "نقشه‌های اجرایی مکانیکی و برقی + دفترچه محاسبات" }
          ],
          "attachments": [
            { "title": "اسناد فاز دو", "file_name": "phase2_docs.zip", "description": "فایل‌های اجرایی فاز دو معماری، سازه و تاسیسات" }
          ]
        },
        {
          "section_id": "design_tender",
          "title": "4- برآورد و اسناد مناقصه",
          "order": 4,
          "default_open": false,
          "attachments": [
            { "title": "اسناد مناقصه و برآورد", "file_name": "tender_docs.xlsx", "description": "فهرست‌بها و اسناد نهایی مناقصه" }
          ]
        }
      ]
    },
    {
      "page_id": "supervision",
      "title": "نظارت",
      "subtitle": "گزارشات نظارت کارگاهی و کنترل پروژه",
      "icon": "badge-check",
      "order": 2,
      "enabled": true,
      "sections": [
        {
          "section_id": "supervision_reports",
          "title": "گزارشات نظارت",
          "order": 1,
          "default_open": true,
          "attachments": [
             { "title": "گزارش ماهانه نظارت", "file_name": "supervision_report_01.pdf", "description": "گزارش وضعیت کارگاهی" }
          ]
        }
      ]
    }
  ]
};

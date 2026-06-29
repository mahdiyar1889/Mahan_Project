window.DASHBOARD_DATA = {
  "settings": {
    "dashboard_title": "داشبورد مدیریتی شهرک نمونه",
    "organization_name": "شرکت توسعه و مدیریت شهرک",
    "report_period": "گزارش پایه ۱۴۰۴",
    "updated_at": "اسفند ۱۴۰۴",
    "currency": "میلیارد ریال",
    "version": "نسخه نمونه ۱.۰",
    "logo_text": "شهرک نمونه",
    "theme": "blue"
  },
  "pages": [
    {
      "page_id": "overview",
      "title": "گزارش جامع مهدیار",
      "subtitle": "شاخص‌های اصلی، جمعیت، مساحت و پیشرفت کل",
      "icon": "layout-dashboard",
      "order": 1,
      "enabled": true,
      "sections": [
        {
          "section_id": "overview_summary",
          "parent_section_id": "",
          "title": "خلاصه مدیریتی",
          "description": "تصویر سریع از وضعیت کل شهرک",
          "order": 1,
          "default_open": true,
          "kpis": [
            {
              "kpi_id": "ov_area",
              "section_id": "overview_summary",
              "title": "مساحت کل شهرک",
              "value": 719.43,
              "unit": "هکتار",
              "icon": "map",
              "format": "decimal",
              "order": 1,
              "_check": "OK"
            },
            {
              "kpi_id": "ov_population",
              "section_id": "overview_summary",
              "title": "جمعیت برآوردی",
              "value": 11619,
              "unit": "نفر",
              "icon": "users",
              "format": "integer",
              "order": 2,
              "_check": "OK"
            },
            {
              "kpi_id": "ov_resident",
              "section_id": "overview_summary",
              "title": "جمعیت موجود",
              "value": 6723,
              "unit": "نفر",
              "icon": "house",
              "format": "integer",
              "order": 3,
              "_check": "OK"
            },
            {
              "kpi_id": "ov_infra",
              "section_id": "overview_summary",
              "title": "پیشرفت زیرساخت",
              "value": 78,
              "unit": "درصد",
              "icon": "settings",
              "format": "percent",
              "order": 4,
              "_check": "OK"
            },
            {
              "kpi_id": "ov_build",
              "section_id": "overview_summary",
              "title": "پیشرفت ساخت‌وساز",
              "value": 24,
              "unit": "درصد",
              "icon": "building",
              "format": "percent",
              "order": 5,
              "_check": "OK"
            }
          ],
          "charts": [],
          "tables": [],
          "texts": [
            {
              "text_id": "ov_intro",
              "section_id": "overview_summary",
              "title": "جمع‌بندی",
              "body": "شهرک نمونه در مرحله توسعه زیرساخت و تکمیل خدمات عمومی قرار دارد. تمرکز مدیریتی دوره جاری بر تکمیل شبکه گاز، ارتقای دسترسی شرقی و آماده‌سازی بسته‌های سرمایه‌گذاری است.",
              "order": 1,
              "_check": "OK"
            }
          ],
          "attachments": [],
          "map_layers": []
        },
        {
          "section_id": "overview_population",
          "parent_section_id": "",
          "title": "جمعیت و مساحت",
          "description": "شاخص‌های جمعیتی و فضایی",
          "order": 2,
          "default_open": false,
          "kpis": [],
          "charts": [],
          "tables": [],
          "texts": [
            {
              "text_id": "ov_population_text",
              "section_id": "overview_population",
              "title": "توضیح",
              "body": "ظرفیت جمعیتی برآوردی شهرک ۱۱٬۶۱۹ نفر است. جمعیت مستقر فعلی حدود ۶٬۷۲۳ نفر برآورد شده و با تکمیل خدمات عمومی انتظار می‌رود نرخ اسکان افزایش یابد.",
              "order": 1,
              "_check": "OK"
            }
          ],
          "attachments": [],
          "map_layers": []
        },
        {
          "section_id": "overview_progress",
          "parent_section_id": "",
          "title": "پیشرفت کلی پروژه",
          "description": "روند پیشرفت اجرایی و زیربنایی",
          "order": 3,
          "default_open": false,
          "kpis": [],
          "charts": [
            {
              "chart_id": "ov_progress_chart",
              "section_id": "overview_progress",
              "title": "روند پیشرفت کلی",
              "type": "line",
              "x_title": "سال",
              "y_title": "درصد پیشرفت",
              "order": 1,
              "_check": "OK",
              "data": [
                {
                  "chart_id": "ov_progress_chart",
                  "label": "۱۴۰۱",
                  "value": 22,
                  "series": "پیشرفت کل",
                  "order": 1,
                  "_check": "OK"
                },
                {
                  "chart_id": "ov_progress_chart",
                  "label": "۱۴۰۲",
                  "value": 39,
                  "series": "پیشرفت کل",
                  "order": 2,
                  "_check": "OK"
                },
                {
                  "chart_id": "ov_progress_chart",
                  "label": "۱۴۰۳",
                  "value": 58,
                  "series": "پیشرفت کل",
                  "order": 3,
                  "_check": "OK"
                },
                {
                  "chart_id": "ov_progress_chart",
                  "label": "۱۴۰۴",
                  "value": 78,
                  "series": "پیشرفت کل",
                  "order": 4,
                  "_check": "OK"
                }
              ]
            }
          ],
          "tables": [],
          "texts": [],
          "attachments": [],
          "map_layers": []
        }
      ]
    },
    {
      "page_id": "infrastructure",
      "title": "زیرساخت و خدمات",
      "subtitle": "شبکه‌های آب، برق، گاز، معابر و خدمات عمومی",
      "icon": "settings",
      "order": 2,
      "enabled": true,
      "sections": [
        {
          "section_id": "infra_networks",
          "parent_section_id": "",
          "title": "شبکه‌های زیرساختی",
          "description": "وضعیت آب، برق، گاز و مخابرات",
          "order": 1,
          "default_open": true,
          "kpis": [
            {
              "kpi_id": "infra_water",
              "section_id": "infra_networks",
              "title": "پیشرفت شبکه آب",
              "value": 88,
              "unit": "درصد",
              "icon": "droplets",
              "format": "percent",
              "order": 1,
              "_check": "OK"
            },
            {
              "kpi_id": "infra_power",
              "section_id": "infra_networks",
              "title": "پیشرفت شبکه برق",
              "value": 81,
              "unit": "درصد",
              "icon": "zap",
              "format": "percent",
              "order": 2,
              "_check": "OK"
            },
            {
              "kpi_id": "infra_gas",
              "section_id": "infra_networks",
              "title": "پیشرفت شبکه گاز",
              "value": 64,
              "unit": "درصد",
              "icon": "flame",
              "format": "percent",
              "order": 3,
              "_check": "OK"
            }
          ],
          "charts": [
            {
              "chart_id": "infra_progress_chart",
              "section_id": "infra_networks",
              "title": "مقایسه پیشرفت شبکه‌ها",
              "type": "bar",
              "x_title": "زیرساخت",
              "y_title": "درصد",
              "order": 1,
              "_check": "OK",
              "data": [
                {
                  "chart_id": "infra_progress_chart",
                  "label": "آب",
                  "value": 88,
                  "series": "پیشرفت",
                  "order": 1,
                  "_check": "OK"
                },
                {
                  "chart_id": "infra_progress_chart",
                  "label": "برق",
                  "value": 81,
                  "series": "پیشرفت",
                  "order": 2,
                  "_check": "OK"
                },
                {
                  "chart_id": "infra_progress_chart",
                  "label": "گاز",
                  "value": 64,
                  "series": "پیشرفت",
                  "order": 3,
                  "_check": "OK"
                },
                {
                  "chart_id": "infra_progress_chart",
                  "label": "مخابرات",
                  "value": 72,
                  "series": "پیشرفت",
                  "order": 4,
                  "_check": "OK"
                },
                {
                  "chart_id": "infra_progress_chart",
                  "label": "معابر",
                  "value": 69,
                  "series": "پیشرفت",
                  "order": 5,
                  "_check": "OK"
                }
              ]
            }
          ],
          "tables": [],
          "texts": [],
          "attachments": [],
          "map_layers": []
        },
        {
          "section_id": "infra_roads",
          "parent_section_id": "",
          "title": "معابر و دسترسی‌ها",
          "description": "طول، پیشرفت و کیفیت اجرای معابر",
          "order": 2,
          "default_open": false,
          "kpis": [
            {
              "kpi_id": "infra_road",
              "section_id": "infra_roads",
              "title": "طول معابر اجراشده",
              "value": 18.7,
              "unit": "کیلومتر",
              "icon": "route",
              "format": "decimal",
              "order": 1,
              "_check": "OK"
            }
          ],
          "charts": [],
          "tables": [
            {
              "table_id": "infra_roads_table",
              "section_id": "infra_roads",
              "title": "وضعیت معابر اصلی",
              "columns": [
                "ردیف",
                "عنوان معبر",
                "طول (کیلومتر)",
                "پیشرفت (درصد)",
                "وضعیت"
              ],
              "order": 1,
              "_check": "OK",
              "rows": [
                [
                  "1",
                  "بلوار ورودی",
                  "4.2",
                  "95",
                  "در حال تکمیل"
                ],
                [
                  "2",
                  "محور مرکزی",
                  "6.8",
                  "76",
                  "در حال اجرا"
                ],
                [
                  "3",
                  "دسترسی شرقی",
                  "3.4",
                  "52",
                  "در حال اجرا"
                ],
                [
                  "4",
                  "کمربندی جنوبی",
                  "4.3",
                  "38",
                  "در مرحله تجهیز کارگاه"
                ]
              ]
            }
          ],
          "texts": [],
          "attachments": [],
          "map_layers": []
        },
        {
          "section_id": "infra_services",
          "parent_section_id": "",
          "title": "خدمات عمومی",
          "description": "فضای سبز، آتش‌نشانی و پسماند",
          "order": 3,
          "default_open": false,
          "kpis": [
            {
              "kpi_id": "infra_green",
              "section_id": "infra_services",
              "title": "فضای سبز اجراشده",
              "value": 31.4,
              "unit": "هکتار",
              "icon": "trees",
              "format": "decimal",
              "order": 1,
              "_check": "OK"
            }
          ],
          "charts": [],
          "tables": [],
          "texts": [
            {
              "text_id": "infra_services_text",
              "section_id": "infra_services",
              "title": "وضعیت خدمات",
              "body": "توسعه فضای سبز، پایگاه آتش‌نشانی و نظام جمع‌آوری پسماند سه اولویت خدمات عمومی در برنامه اجرایی سال آینده هستند.",
              "order": 1,
              "_check": "OK"
            }
          ],
          "attachments": [],
          "map_layers": []
        }
      ]
    },
    {
      "page_id": "costs",
      "title": "برآورد هزینه‌ها",
      "subtitle": "هزینه‌های اجرایی، زیرساختی و خدماتی",
      "icon": "wallet",
      "order": 3,
      "enabled": true,
      "sections": [
        {
          "section_id": "costs_summary",
          "parent_section_id": "",
          "title": "خلاصه هزینه‌ها",
          "description": "برآورد کل سرمایه‌گذاری مورد نیاز",
          "order": 1,
          "default_open": true,
          "kpis": [
            {
              "kpi_id": "cost_total",
              "section_id": "costs_summary",
              "title": "کل برآورد هزینه",
              "value": 18500,
              "unit": "میلیارد ریال",
              "icon": "wallet",
              "format": "money",
              "order": 1,
              "_check": "OK"
            },
            {
              "kpi_id": "cost_spent",
              "section_id": "costs_summary",
              "title": "هزینه انجام‌شده",
              "value": 7940,
              "unit": "میلیارد ریال",
              "icon": "receipt",
              "format": "money",
              "order": 2,
              "_check": "OK"
            },
            {
              "kpi_id": "cost_remaining",
              "section_id": "costs_summary",
              "title": "نیاز مالی باقی‌مانده",
              "value": 10560,
              "unit": "میلیارد ریال",
              "icon": "landmark",
              "format": "money",
              "order": 3,
              "_check": "OK"
            },
            {
              "kpi_id": "cost_progress",
              "section_id": "costs_summary",
              "title": "پوشش مالی پروژه",
              "value": 42.9,
              "unit": "درصد",
              "icon": "circle-percent",
              "format": "percent",
              "order": 4,
              "_check": "OK"
            }
          ],
          "charts": [],
          "tables": [],
          "texts": [
            {
              "text_id": "cost_note",
              "section_id": "costs_summary",
              "title": "یادداشت مدیریتی",
              "body": "برآوردها نمونه هستند و برای استفاده واقعی باید با فهرست‌بهای جاری، قراردادهای فعال و نرخ‌های تعدیل به‌روزرسانی شوند.",
              "order": 1,
              "_check": "OK"
            }
          ],
          "attachments": [],
          "map_layers": []
        },
        {
          "section_id": "costs_breakdown",
          "parent_section_id": "",
          "title": "تفکیک هزینه‌ها",
          "description": "سهم هر گروه از هزینه‌ها",
          "order": 2,
          "default_open": false,
          "kpis": [],
          "charts": [
            {
              "chart_id": "cost_share_chart",
              "section_id": "costs_breakdown",
              "title": "سهم گروه‌های هزینه‌ای",
              "type": "doughnut",
              "x_title": "گروه هزینه",
              "y_title": "مبلغ",
              "order": 1,
              "_check": "OK",
              "data": [
                {
                  "chart_id": "cost_share_chart",
                  "label": "شبکه‌های زیرساخت",
                  "value": 6200,
                  "series": "هزینه",
                  "order": 1,
                  "_check": "OK"
                },
                {
                  "chart_id": "cost_share_chart",
                  "label": "معابر",
                  "value": 4300,
                  "series": "هزینه",
                  "order": 2,
                  "_check": "OK"
                },
                {
                  "chart_id": "cost_share_chart",
                  "label": "خدمات عمومی",
                  "value": 2850,
                  "series": "هزینه",
                  "order": 3,
                  "_check": "OK"
                },
                {
                  "chart_id": "cost_share_chart",
                  "label": "فضای سبز",
                  "value": 1750,
                  "series": "هزینه",
                  "order": 4,
                  "_check": "OK"
                },
                {
                  "chart_id": "cost_share_chart",
                  "label": "مدیریت و پشتیبانی",
                  "value": 3400,
                  "series": "هزینه",
                  "order": 5,
                  "_check": "OK"
                }
              ]
            }
          ],
          "tables": [],
          "texts": [],
          "attachments": [],
          "map_layers": []
        },
        {
          "section_id": "costs_details",
          "parent_section_id": "",
          "title": "ریز اقلام هزینه‌ای",
          "description": "جدول اقلام و وضعیت برآورد",
          "order": 3,
          "default_open": false,
          "kpis": [],
          "charts": [],
          "tables": [
            {
              "table_id": "cost_details_table",
              "section_id": "costs_details",
              "title": "ریز اقلام هزینه‌ای",
              "columns": [
                "ردیف",
                "گروه",
                "شرح",
                "برآورد (میلیارد ریال)",
                "وضعیت"
              ],
              "order": 1,
              "_check": "OK",
              "rows": [
                [
                  "1",
                  "زیرساخت",
                  "شبکه آب و فاضلاب",
                  "2450",
                  "به‌روزرسانی شده"
                ],
                [
                  "2",
                  "زیرساخت",
                  "شبکه برق و روشنایی",
                  "2180",
                  "به‌روزرسانی شده"
                ],
                [
                  "3",
                  "معابر",
                  "زیرسازی و آسفالت",
                  "4300",
                  "نیازمند بازبینی"
                ],
                [
                  "4",
                  "خدمات",
                  "ساختمان خدمات عمومی",
                  "1640",
                  "برآورد اولیه"
                ],
                [
                  "5",
                  "فضای سبز",
                  "توسعه پارک‌ها و آبیاری",
                  "1750",
                  "به‌روزرسانی شده"
                ]
              ]
            }
          ],
          "texts": [],
          "attachments": [
            {
              "attachment_id": "att_01",
              "section_id": "costs_details",
              "title": "نمونه فایل ریز برآورد هزینه",
              "file_name": "sample-cost-details.xlsx",
              "file_type": "xlsx",
              "description": "در نسخه واقعی فایل در فضای خصوصی ذخیره می‌شود.",
              "order": 1,
              "_check": "OK"
            }
          ],
          "map_layers": []
        }
      ]
    },
    {
      "page_id": "revenue",
      "title": "درآمدها و منابع",
      "subtitle": "منابع درآمدی، جریان وصول و سناریوهای مالی",
      "icon": "coins",
      "order": 4,
      "enabled": true,
      "sections": [
        {
          "section_id": "revenue_summary",
          "parent_section_id": "",
          "title": "خلاصه منابع درآمدی",
          "description": "ترکیب منابع قابل اتکا",
          "order": 1,
          "default_open": true,
          "kpis": [
            {
              "kpi_id": "rev_total",
              "section_id": "revenue_summary",
              "title": "منابع قابل تحقق",
              "value": 16400,
              "unit": "میلیارد ریال",
              "icon": "coins",
              "format": "money",
              "order": 1,
              "_check": "OK"
            },
            {
              "kpi_id": "rev_collected",
              "section_id": "revenue_summary",
              "title": "وصول‌شده تا امروز",
              "value": 6120,
              "unit": "میلیارد ریال",
              "icon": "badge-check",
              "format": "money",
              "order": 2,
              "_check": "OK"
            },
            {
              "kpi_id": "rev_gap",
              "section_id": "revenue_summary",
              "title": "شکاف تأمین مالی",
              "value": 2100,
              "unit": "میلیارد ریال",
              "icon": "triangle-alert",
              "format": "money",
              "order": 3,
              "_check": "OK"
            }
          ],
          "charts": [],
          "tables": [],
          "texts": [
            {
              "text_id": "revenue_note",
              "section_id": "revenue_summary",
              "title": "نکته کلیدی",
              "body": "تحقق درآمدها به آماده‌سازی زمین‌های قابل واگذاری و نهایی شدن حداقل سه بسته مشارکت با بخش خصوصی وابسته است.",
              "order": 1,
              "_check": "OK"
            }
          ],
          "attachments": [],
          "map_layers": []
        },
        {
          "section_id": "revenue_projection",
          "parent_section_id": "",
          "title": "پیش‌بینی وصول",
          "description": "برنامه وصول طی چهار سال",
          "order": 2,
          "default_open": false,
          "kpis": [],
          "charts": [
            {
              "chart_id": "revenue_projection_chart",
              "section_id": "revenue_projection",
              "title": "پیش‌بینی وصول منابع",
              "type": "line",
              "x_title": "سال",
              "y_title": "میلیارد ریال",
              "order": 1,
              "_check": "OK",
              "data": [
                {
                  "chart_id": "revenue_projection_chart",
                  "label": "۱۴۰۴",
                  "value": 4200,
                  "series": "وصول پیش‌بینی‌شده",
                  "order": 1,
                  "_check": "OK"
                },
                {
                  "chart_id": "revenue_projection_chart",
                  "label": "۱۴۰۵",
                  "value": 5100,
                  "series": "وصول پیش‌بینی‌شده",
                  "order": 2,
                  "_check": "OK"
                },
                {
                  "chart_id": "revenue_projection_chart",
                  "label": "۱۴۰۶",
                  "value": 4300,
                  "series": "وصول پیش‌بینی‌شده",
                  "order": 3,
                  "_check": "OK"
                },
                {
                  "chart_id": "revenue_projection_chart",
                  "label": "۱۴۰۷",
                  "value": 2800,
                  "series": "وصول پیش‌بینی‌شده",
                  "order": 4,
                  "_check": "OK"
                }
              ]
            }
          ],
          "tables": [],
          "texts": [],
          "attachments": [],
          "map_layers": []
        },
        {
          "section_id": "revenue_sources",
          "parent_section_id": "",
          "title": "جزئیات منابع",
          "description": "شرح منابع و درجه اطمینان",
          "order": 3,
          "default_open": false,
          "kpis": [],
          "charts": [],
          "tables": [
            {
              "table_id": "revenue_sources_table",
              "section_id": "revenue_sources",
              "title": "جزئیات منابع درآمدی",
              "columns": [
                "ردیف",
                "منبع",
                "برآورد (میلیارد ریال)",
                "درجه اطمینان",
                "توضیح"
              ],
              "order": 1,
              "_check": "OK",
              "rows": [
                [
                  "1",
                  "فروش و واگذاری زمین",
                  "7600",
                  "زیاد",
                  "منبع اصلی درآمد"
                ],
                [
                  "2",
                  "عوارض و خدمات",
                  "2900",
                  "متوسط",
                  "وابسته به نرخ بهره‌برداری"
                ],
                [
                  "3",
                  "مشارکت بخش خصوصی",
                  "4100",
                  "متوسط",
                  "نیازمند بسته‌های جذاب سرمایه‌گذاری"
                ],
                [
                  "4",
                  "کمک‌ها و اعتبارات",
                  "1800",
                  "کم",
                  "وابسته به تصویب بودجه"
                ]
              ]
            }
          ],
          "texts": [],
          "attachments": [],
          "map_layers": []
        }
      ]
    },
    {
      "page_id": "investment",
      "title": "بسته‌های سرمایه‌گذاری",
      "subtitle": "پروژه‌های پیشنهادی و اولویت‌های مشارکت",
      "icon": "briefcase-business",
      "order": 5,
      "enabled": true,
      "sections": [
        {
          "section_id": "investment_summary",
          "parent_section_id": "",
          "title": "خلاصه فرصت‌ها",
          "description": "نمای کلی پروژه‌های قابل واگذاری",
          "order": 1,
          "default_open": true,
          "kpis": [
            {
              "kpi_id": "inv_packages",
              "section_id": "investment_summary",
              "title": "تعداد بسته‌های پیشنهادی",
              "value": 8,
              "unit": "بسته",
              "icon": "briefcase-business",
              "format": "integer",
              "order": 1,
              "_check": "OK"
            },
            {
              "kpi_id": "inv_value",
              "section_id": "investment_summary",
              "title": "ارزش کل فرصت‌ها",
              "value": 9200,
              "unit": "میلیارد ریال",
              "icon": "chart-no-axes-combined",
              "format": "money",
              "order": 2,
              "_check": "OK"
            },
            {
              "kpi_id": "inv_ready",
              "section_id": "investment_summary",
              "title": "آماده ارائه به سرمایه‌گذار",
              "value": 3,
              "unit": "بسته",
              "icon": "badge-check",
              "format": "integer",
              "order": 3,
              "_check": "OK"
            }
          ],
          "charts": [],
          "tables": [],
          "texts": [
            {
              "text_id": "investment_note",
              "section_id": "investment_summary",
              "title": "راهبرد پیشنهادی",
              "body": "برای جذب سرمایه‌گذار، بسته‌ها باید همراه با زمین، مجوزهای پایه، مدل مالی اولیه و برنامه زمان‌بندی ارائه شوند.",
              "order": 1,
              "_check": "OK"
            }
          ],
          "attachments": [],
          "map_layers": []
        },
        {
          "section_id": "investment_packages",
          "parent_section_id": "",
          "title": "بسته‌های پیشنهادی",
          "description": "مشخصات و وضعیت بسته‌های سرمایه‌گذاری",
          "order": 2,
          "default_open": false,
          "kpis": [],
          "charts": [],
          "tables": [
            {
              "table_id": "investment_packages_table",
              "section_id": "investment_packages",
              "title": "بسته‌های پیشنهادی سرمایه‌گذاری",
              "columns": [
                "ردیف",
                "عنوان پروژه",
                "ارزش (میلیارد ریال)",
                "مدل همکاری",
                "وضعیت"
              ],
              "order": 1,
              "_check": "OK",
              "rows": [
                [
                  "1",
                  "مرکز تجاری و خدماتی",
                  "2400",
                  "BOT",
                  "آماده ارائه"
                ],
                [
                  "2",
                  "مجموعه گردشگری و اقامتی",
                  "1950",
                  "مشارکت مدنی",
                  "آماده ارائه"
                ],
                [
                  "3",
                  "نیروگاه خورشیدی",
                  "1300",
                  "BOO",
                  "آماده ارائه"
                ],
                [
                  "4",
                  "پارک فناوری",
                  "2100",
                  "اجاره بلندمدت",
                  "در حال مطالعه"
                ],
                [
                  "5",
                  "پارکینگ طبقاتی",
                  "850",
                  "BOT",
                  "در حال امکان‌سنجی"
                ]
              ]
            }
          ],
          "texts": [],
          "attachments": [],
          "map_layers": []
        },
        {
          "section_id": "investment_priority",
          "parent_section_id": "",
          "title": "اولویت‌بندی پروژه‌ها",
          "description": "امتیازدهی جذابیت و اثرگذاری",
          "order": 3,
          "default_open": false,
          "kpis": [],
          "charts": [
            {
              "chart_id": "investment_priority_chart",
              "section_id": "investment_priority",
              "title": "امتیاز جذابیت بسته‌ها",
              "type": "bar",
              "x_title": "بسته",
              "y_title": "امتیاز",
              "order": 1,
              "_check": "OK",
              "data": [
                {
                  "chart_id": "investment_priority_chart",
                  "label": "مرکز تجاری",
                  "value": 91,
                  "series": "امتیاز",
                  "order": 1,
                  "_check": "OK"
                },
                {
                  "chart_id": "investment_priority_chart",
                  "label": "مجموعه گردشگری",
                  "value": 86,
                  "series": "امتیاز",
                  "order": 2,
                  "_check": "OK"
                },
                {
                  "chart_id": "investment_priority_chart",
                  "label": "نیروگاه خورشیدی",
                  "value": 83,
                  "series": "امتیاز",
                  "order": 3,
                  "_check": "OK"
                },
                {
                  "chart_id": "investment_priority_chart",
                  "label": "پارک فناوری",
                  "value": 78,
                  "series": "امتیاز",
                  "order": 4,
                  "_check": "OK"
                },
                {
                  "chart_id": "investment_priority_chart",
                  "label": "پارکینگ طبقاتی",
                  "value": 72,
                  "series": "امتیاز",
                  "order": 5,
                  "_check": "OK"
                }
              ]
            }
          ],
          "tables": [],
          "texts": [],
          "attachments": [],
          "map_layers": []
        }
      ]
    },
    {
      "page_id": "budget",
      "title": "تخصیص بودجه",
      "subtitle": "برنامه تخصیص منابع و کنترل مصارف",
      "icon": "pie-chart",
      "order": 6,
      "enabled": true,
      "sections": [
        {
          "section_id": "budget_summary",
          "parent_section_id": "",
          "title": "خلاصه تخصیص بودجه",
          "description": "تصویر بودجه سال جاری",
          "order": 1,
          "default_open": true,
          "kpis": [
            {
              "kpi_id": "budget_approved",
              "section_id": "budget_summary",
              "title": "بودجه مصوب سال جاری",
              "value": 4800,
              "unit": "میلیارد ریال",
              "icon": "landmark",
              "format": "money",
              "order": 1,
              "_check": "OK"
            },
            {
              "kpi_id": "budget_allocated",
              "section_id": "budget_summary",
              "title": "تخصیص ابلاغ‌شده",
              "value": 3180,
              "unit": "میلیارد ریال",
              "icon": "pie-chart",
              "format": "money",
              "order": 2,
              "_check": "OK"
            },
            {
              "kpi_id": "budget_absorption",
              "section_id": "budget_summary",
              "title": "جذب بودجه",
              "value": 71,
              "unit": "درصد",
              "icon": "circle-percent",
              "format": "percent",
              "order": 3,
              "_check": "OK"
            }
          ],
          "charts": [],
          "tables": [],
          "texts": [
            {
              "text_id": "budget_note",
              "section_id": "budget_summary",
              "title": "وضعیت بودجه",
              "body": "تخصیص فعلی معادل ۶۶ درصد بودجه مصوب است. اولویت پرداخت با پروژه‌هایی است که بیشترین اثر را بر بهره‌برداری و وصول درآمد دارند.",
              "order": 1,
              "_check": "OK"
            }
          ],
          "attachments": [],
          "map_layers": []
        },
        {
          "section_id": "budget_allocation",
          "parent_section_id": "",
          "title": "تخصیص به تفکیک حوزه",
          "description": "سهم حوزه‌ها از بودجه مصوب",
          "order": 2,
          "default_open": false,
          "kpis": [],
          "charts": [
            {
              "chart_id": "budget_allocation_chart",
              "section_id": "budget_allocation",
              "title": "سهم حوزه‌ها از تخصیص بودجه",
              "type": "doughnut",
              "x_title": "حوزه",
              "y_title": "مبلغ",
              "order": 1,
              "_check": "OK",
              "data": [
                {
                  "chart_id": "budget_allocation_chart",
                  "label": "زیرساخت",
                  "value": 1680,
                  "series": "تخصیص",
                  "order": 1,
                  "_check": "OK"
                },
                {
                  "chart_id": "budget_allocation_chart",
                  "label": "معابر",
                  "value": 940,
                  "series": "تخصیص",
                  "order": 2,
                  "_check": "OK"
                },
                {
                  "chart_id": "budget_allocation_chart",
                  "label": "خدمات عمومی",
                  "value": 360,
                  "series": "تخصیص",
                  "order": 3,
                  "_check": "OK"
                },
                {
                  "chart_id": "budget_allocation_chart",
                  "label": "فضای سبز",
                  "value": 200,
                  "series": "تخصیص",
                  "order": 4,
                  "_check": "OK"
                }
              ]
            }
          ],
          "tables": [],
          "texts": [],
          "attachments": [],
          "map_layers": []
        },
        {
          "section_id": "budget_schedule",
          "parent_section_id": "",
          "title": "تقویم تخصیص",
          "description": "زمان‌بندی تخصیص فصلی",
          "order": 3,
          "default_open": false,
          "kpis": [],
          "charts": [
            {
              "chart_id": "budget_schedule_chart",
              "section_id": "budget_schedule",
              "title": "تقویم تخصیص فصلی",
              "type": "bar",
              "x_title": "فصل",
              "y_title": "میلیارد ریال",
              "order": 1,
              "_check": "OK",
              "data": [
                {
                  "chart_id": "budget_schedule_chart",
                  "label": "بهار",
                  "value": 540,
                  "series": "تخصیص",
                  "order": 1,
                  "_check": "OK"
                },
                {
                  "chart_id": "budget_schedule_chart",
                  "label": "تابستان",
                  "value": 820,
                  "series": "تخصیص",
                  "order": 2,
                  "_check": "OK"
                },
                {
                  "chart_id": "budget_schedule_chart",
                  "label": "پاییز",
                  "value": 1010,
                  "series": "تخصیص",
                  "order": 3,
                  "_check": "OK"
                },
                {
                  "chart_id": "budget_schedule_chart",
                  "label": "زمستان",
                  "value": 810,
                  "series": "تخصیص",
                  "order": 4,
                  "_check": "OK"
                }
              ]
            }
          ],
          "tables": [
            {
              "table_id": "budget_schedule_table",
              "section_id": "budget_schedule",
              "title": "برنامه تخصیص بودجه",
              "columns": [
                "ردیف",
                "فصل",
                "مبلغ (میلیارد ریال)",
                "درصد از کل",
                "وضعیت"
              ],
              "order": 1,
              "_check": "OK",
              "rows": [
                [
                  "1",
                  "بهار",
                  "540",
                  "17",
                  "ابلاغ شده"
                ],
                [
                  "2",
                  "تابستان",
                  "820",
                  "26",
                  "ابلاغ شده"
                ],
                [
                  "3",
                  "پاییز",
                  "1010",
                  "32",
                  "برنامه‌ریزی شده"
                ],
                [
                  "4",
                  "زمستان",
                  "810",
                  "25",
                  "برنامه‌ریزی شده"
                ]
              ]
            }
          ],
          "texts": [],
          "attachments": [],
          "map_layers": []
        }
      ]
    },
    {
      "page_id": "zoning",
      "title": "نقشه و ضوابط",
      "subtitle": "کاربری اراضی، پهنه‌بندی و ضوابط توسعه",
      "icon": "map",
      "order": 7,
      "enabled": true,
      "sections": [
        {
          "section_id": "zoning_summary",
          "parent_section_id": "",
          "title": "خلاصه کاربری اراضی",
          "description": "مساحت و سهم کاربری‌ها",
          "order": 1,
          "default_open": true,
          "kpis": [
            {
              "kpi_id": "zone_residential",
              "section_id": "zoning_summary",
              "title": "کاربری مسکونی",
              "value": 312.6,
              "unit": "هکتار",
              "icon": "house",
              "format": "decimal",
              "order": 1,
              "_check": "OK"
            },
            {
              "kpi_id": "zone_green",
              "section_id": "zoning_summary",
              "title": "فضای سبز",
              "value": 96.4,
              "unit": "هکتار",
              "icon": "trees",
              "format": "decimal",
              "order": 2,
              "_check": "OK"
            },
            {
              "kpi_id": "zone_services",
              "section_id": "zoning_summary",
              "title": "خدمات عمومی",
              "value": 73.8,
              "unit": "هکتار",
              "icon": "building-2",
              "format": "decimal",
              "order": 3,
              "_check": "OK"
            },
            {
              "kpi_id": "zone_roads",
              "section_id": "zoning_summary",
              "title": "معابر و دسترسی",
              "value": 142.1,
              "unit": "هکتار",
              "icon": "route",
              "format": "decimal",
              "order": 4,
              "_check": "OK"
            }
          ],
          "charts": [
            {
              "chart_id": "zoning_share_chart",
              "section_id": "zoning_summary",
              "title": "ترکیب کاربری اراضی",
              "type": "doughnut",
              "x_title": "کاربری",
              "y_title": "هکتار",
              "order": 1,
              "_check": "OK",
              "data": [
                {
                  "chart_id": "zoning_share_chart",
                  "label": "مسکونی",
                  "value": 312.6,
                  "series": "مساحت",
                  "order": 1,
                  "_check": "OK"
                },
                {
                  "chart_id": "zoning_share_chart",
                  "label": "فضای سبز",
                  "value": 96.4,
                  "series": "مساحت",
                  "order": 2,
                  "_check": "OK"
                },
                {
                  "chart_id": "zoning_share_chart",
                  "label": "خدمات عمومی",
                  "value": 73.8,
                  "series": "مساحت",
                  "order": 3,
                  "_check": "OK"
                },
                {
                  "chart_id": "zoning_share_chart",
                  "label": "معابر",
                  "value": 142.1,
                  "series": "مساحت",
                  "order": 4,
                  "_check": "OK"
                },
                {
                  "chart_id": "zoning_share_chart",
                  "label": "سایر کاربری‌ها",
                  "value": 94.53,
                  "series": "مساحت",
                  "order": 5,
                  "_check": "OK"
                }
              ]
            }
          ],
          "tables": [],
          "texts": [],
          "attachments": [],
          "map_layers": []
        },
        {
          "section_id": "zoning_rules",
          "parent_section_id": "",
          "title": "ضوابط اصلی",
          "description": "محدودیت‌ها و الزامات توسعه",
          "order": 2,
          "default_open": false,
          "kpis": [],
          "charts": [],
          "tables": [
            {
              "table_id": "zoning_rules_table",
              "section_id": "zoning_rules",
              "title": "ضوابط منتخب توسعه",
              "columns": [
                "ردیف",
                "پهنه",
                "حداکثر تراکم",
                "حداکثر ارتفاع",
                "توضیح"
              ],
              "order": 1,
              "_check": "OK",
              "rows": [
                [
                  "1",
                  "مسکونی کم‌تراکم",
                  "120 درصد",
                  "3 طبقه",
                  "رعایت حداقل 35 درصد فضای باز"
                ],
                [
                  "2",
                  "مسکونی میان‌تراکم",
                  "180 درصد",
                  "5 طبقه",
                  "تأمین پارکینگ الزامی"
                ],
                [
                  "3",
                  "تجاری و خدماتی",
                  "240 درصد",
                  "6 طبقه",
                  "تأیید طرح نما ضروری است"
                ],
                [
                  "4",
                  "فضای سبز",
                  "10 درصد",
                  "1 طبقه",
                  "صرفاً خدمات پشتیبان پارک"
                ]
              ]
            }
          ],
          "texts": [],
          "attachments": [],
          "map_layers": []
        },
        {
          "section_id": "zoning_map",
          "parent_section_id": "",
          "title": "راهنمای نقشه",
          "description": "معرفی لایه‌های اطلاعات مکانی",
          "order": 3,
          "default_open": false,
          "kpis": [],
          "charts": [],
          "tables": [],
          "texts": [
            {
              "text_id": "zoning_note",
              "section_id": "zoning_map",
              "title": "راهنمای استفاده",
              "body": "در نسخه اولیه، نقشه به‌صورت جای‌نگهدار نمایش داده می‌شود. در مرحله بعد می‌توان لایه‌های GeoJSON، محدوده قطعات و پهنه‌بندی را به داشبورد متصل کرد.",
              "order": 1,
              "_check": "OK"
            }
          ],
          "attachments": [
            {
              "attachment_id": "att_02",
              "section_id": "zoning_map",
              "title": "نمونه نقشه پهنه‌بندی",
              "file_name": "sample-zoning-map.pdf",
              "file_type": "pdf",
              "description": "در نسخه اولیه صرفاً به‌عنوان جای‌نگهدار تعریف شده است.",
              "order": 1,
              "_check": "OK"
            }
          ],
          "map_layers": [
            {
              "layer_id": "layer_boundary",
              "section_id": "zoning_map",
              "title": "محدوده شهرک",
              "layer_type": "polygon",
              "source_file": "boundary.geojson",
              "visible": true,
              "order": 1,
              "_check": "OK"
            },
            {
              "layer_id": "layer_landuse",
              "section_id": "zoning_map",
              "title": "کاربری اراضی",
              "layer_type": "polygon",
              "source_file": "landuse.geojson",
              "visible": true,
              "order": 2,
              "_check": "OK"
            },
            {
              "layer_id": "layer_projects",
              "section_id": "zoning_map",
              "title": "پروژه‌های سرمایه‌گذاری",
              "layer_type": "point",
              "source_file": "projects.geojson",
              "visible": false,
              "order": 3,
              "_check": "OK"
            }
          ]
        }
      ]
    }
  ]
};

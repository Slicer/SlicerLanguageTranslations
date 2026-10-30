<?xml version="1.0" encoding="utf-8"?>
<!DOCTYPE TS>
<TS version="2.1" language="fa">
<context>
    <name>TutorialMaker</name>
    <message>
        <location filename="text_dict_default.json" line="8"/>
        <source>Basics of Data Loading and 3D Visualization in 3D Slicer</source>
        <extracomment>0_TextBox_0</extracomment>
        <translation type="unfinished">مبانی بارگذاری داده و تصویرسازی سه‌بعدی در 3D Slicer</translation>
    </message>
    <message>
        <location filename="text_dict_default.json" line="10"/>
        <source>Author: Sonia Pujol, Ph.D.</source>
        <extracomment>0_TextBox_1</extracomment>
        <translation type="unfinished">نویسنده: سونیا پوجول، دکترا</translation>
    </message>
    <message>
        <location filename="text_dict_default.json" line="12"/>
        <source>24/11/2024</source>
        <extracomment>0_TextBox_2</extracomment>
        <translation type="unfinished">۲۰۲۴/۱۱/۲۴</translation>
    </message>
    <message>
        <location filename="text_dict_default.json" line="14"/>
        <source>Assistant Professor of Radiology Brigham and Women’s Hospital Harvard Medical School</source>
        <extracomment>0_TextBox_3</extracomment>
        <translation type="unfinished">استادیار رادیولوژی، بیمارستان بریگهام و زنان، دانشکده پزشکی هاروارد</translation>
    </message>
    <message>
        <location filename="text_dict_default.json" line="16"/>
        <source>Overall Goal</source>
        <extracomment>1_TextBox_0</extracomment>
        <translation type="unfinished">هدف کلی</translation>
    </message>
    <message>
        <location filename="text_dict_default.json" line="18"/>
        <source>This tutorial is an introduction to the basics of loading and viewing DICOM images and 3D models in 3D Slicer.</source>
        <extracomment>1_TextBox_1</extracomment>
        <translation type="unfinished">این آموزش مقدمه‌ای بر اصول بارگذاری و مشاهده تصاویر DICOM و مدل‌های سه‌بعدی در 3D Slicer است.</translation>
    </message>
    <message>
        <location filename="text_dict_default.json" line="20"/>
        <source>Learning Objectives</source>
        <extracomment>2_TextBox_0</extracomment>
        <translation type="unfinished">اهداف یادگیری</translation>
    </message>
    <message>
        <location filename="text_dict_default.json" line="22"/>
        <source> • Following this tutorial, you will be able

• to load and visualize DICOM images in Slicer

• to perform volume rendering of CT data

• to load and visualize 3D models reconstructed from MRI data</source>
        <extracomment>2_TextBox_1</extracomment>
        <translation type="unfinished"> • با دنبال کردن این آموزش، شما قادر خواهید بود:

• تصاویر DICOM را در Slicer بارگذاری و مشاهده کنید

• رندر حجمی داده‌های سی‌تی (CT) را انجام دهید

• مدل‌های سه‌بعدی بازسازی‌شده از داده‌های ام‌آر‌آی (MRI) را بارگذاری و مشاهده کنید</translation>
    </message>
    <message>
        <location filename="text_dict_default.json" line="24"/>
        <source>Tutorial materials</source>
        <extracomment>3_TextBox_0</extracomment>
        <translation type="unfinished">مواد آموزشی</translation>
    </message>
    <message>
        <location filename="text_dict_default.json" line="26"/>
        <source>• 3D Slicer version 5.10

•  3D VisualizationDataSet.zip</source>
        <extracomment>3_TextBox_1</extracomment>
        <translation type="unfinished">• 3D Slicer نسخه ۵.۱۰
• 3D VisualizationDataSet.zip</translation>
    </message>
    <message>
        <location filename="text_dict_default.json" line="28"/>
        <location filename="text_dict_default.json" line="142"/>
        <source>Tutorial dataset</source>
        <extracomment>4_TextBox_0
----------
33_TextBox_0</extracomment>
        <translation type="unfinished">آموزش مجموعه داده</translation>
    </message>
    <message>
        <location filename="text_dict_default.json" line="30"/>
        <source>The file 3DVisualizationDataset.zip contains two directories:

- dataset1_Thorax_Abdomen 
- dataset2_Head

Unzip the file 3DVisualizationDataset.zip on your computer to access the datasets</source>
        <extracomment>4_TextBox_1</extracomment>
        <translation type="unfinished">فایل 3DVisualizationDataset.zip شامل دو پوشه است:

- dataset1_Thorax_Abdomen
- dataset2_Head

برای دسترسی به مجموعه داده‌ها، فایل 3DVisualizationDataset.zip را در کامپیوتر خود از حالت فشرده خارج کنید.</translation>
    </message>
    <message>
        <location filename="text_dict_default.json" line="32"/>
        <source>Disclaimer</source>
        <extracomment>5_TextBox_0</extracomment>
        <translation type="unfinished">سلب مسئولیت</translation>
    </message>
    <message>
        <location filename="text_dict_default.json" line="34"/>
        <source>• 3D Slicer is a free open source software application distributed under a BSD style license. 


• The software is not FDA approved or CE-Marked, and is for research use only.
</source>
        <extracomment>5_TextBox_1</extracomment>
        <translation type="unfinished">• 3D Slicer یک نرم‌افزار متن‌باز رایگان است که تحت مجوز سبک BSD توزیع می‌شود. 


• این نرم‌افزار مورد تأیید FDA نیست و دارای نشان CE نیست و فقط برای مصارف تحقیقاتی است.
</translation>
    </message>
    <message>
        <location filename="text_dict_default.json" line="36"/>
        <source>Tutorial Outline</source>
        <extracomment>6_TextBox_0</extracomment>
        <translation type="unfinished">چشم‌انداز آموزشی</translation>
    </message>
    <message>
        <location filename="text_dict_default.json" line="38"/>
        <source>•  Part 1: Loading and Viewing DICOM data

•  Part 2: Volume Rendering


• Part 3: Loading and Viewing 3D models</source>
        <extracomment>6_TextBox_1</extracomment>
        <translation type="unfinished">•  بخش ۱: بارگذاری و مشاهده داده‌های DICOM

•  بخش ۲: رندر حجمی


• بخش ۳: بارگذاری و مشاهده مدل‌های سه‌بعدی</translation>
    </message>
    <message>
        <location filename="text_dict_default.json" line="40"/>
        <source>Part 1: DICOM Data Loading</source>
        <extracomment>7_TextBox_0</extracomment>
        <translation type="unfinished">بخش ۱: بارگذاری داده‌های DICOM</translation>
    </message>
    <message>
        <location filename="text_dict_default.json" line="42"/>
        <location filename="text_dict_default.json" line="48"/>
        <source>Loading a DICOM volume</source>
        <extracomment>8_LoadingaDICOMvolume_title
----------
9_LoadingaDICOMvolume_title</extracomment>
        <translation type="unfinished">بارگذاری حجم DICOM</translation>
    </message>
    <message>
        <location filename="text_dict_default.json" line="44"/>
        <source>Slicer displays the user interface of the DICOM module</source>
        <extracomment>8_TextBox_0</extracomment>
        <translation type="unfinished">اسلایسر رابط کاربری ماژول DICOM را نمایش می‌دهد.</translation>
    </message>
    <message>
        <location filename="text_dict_default.json" line="46"/>
        <source>The patient1 study contains a CT Thorax Abdomen dataset</source>
        <extracomment>8_TextBox_1</extracomment>
        <translation type="unfinished">مطالعهٔ Patient1 شامل یک مجموعه دادهٔ سی‌تی قفسهٔ سینه و شکم است.</translation>
    </message>
    <message>
        <location filename="text_dict_default.json" line="50"/>
        <source>Select patient1 and click on Load 
to load the dataset in Slicer</source>
        <extracomment>9_ArrowText_1</extracomment>
        <translation type="unfinished">patient1 را انتخاب کرده و برای بارگذاری مجموعه داده در Slicer روی Load کلیک کنید.</translation>
    </message>
    <message>
        <location filename="text_dict_default.json" line="52"/>
        <location filename="text_dict_default.json" line="56"/>
        <location filename="text_dict_default.json" line="62"/>
        <location filename="text_dict_default.json" line="66"/>
        <location filename="text_dict_default.json" line="70"/>
        <location filename="text_dict_default.json" line="74"/>
        <location filename="text_dict_default.json" line="78"/>
        <location filename="text_dict_default.json" line="82"/>
        <location filename="text_dict_default.json" line="86"/>
        <source>Visualizing DICOM images</source>
        <extracomment>10_VisualizingDICOMimages_title
----------
11_VisualizingDICOMimages_title
----------
12_VisualizingDICOMimages_title
----------
13_VisualizingDICOMimages_title
----------
14_VisualizingDICOMimages_title
----------
15_VisualizingDICOMimages_title
----------
16_VisualizingDICOMimages_title
----------
17_VisualizingDICOMimages_title
----------
18_VisualizingDICOMimages_title</extracomment>
        <translation type="unfinished">تصویرسازی تصاویر DICOM</translation>
    </message>
    <message>
        <location filename="text_dict_default.json" line="54"/>
        <source>Slicer displays the axial, coronal 
and sagittal images of the CT 
Thorax Abdomen dataset </source>
        <extracomment>10_TextBox_0</extracomment>
        <translation type="unfinished">اسلایسر تصاویر محوری، کرونال و صفاقی مجموعه داده سی‌تی قفسه سینه و شکم را نمایش می‌دهد. </translation>
    </message>
    <message>
        <location filename="text_dict_default.json" line="58"/>
        <source>Left click on DICOM to display 
the list of modules of Slicer</source>
        <extracomment>11_ArrowText_1</extracomment>
        <translation type="unfinished">روی DICOM کلیک چپ کنید تا فهرست ماژول‌های Slicer نمایش داده شود.</translation>
    </message>
    <message>
        <location filename="text_dict_default.json" line="60"/>
        <source>Select the module 
Volumes</source>
        <extracomment>11_ArrowText_2</extracomment>
        <translation type="unfinished">ماژول را انتخاب کنید
حجم‌ها</translation>
    </message>
    <message>
        <location filename="text_dict_default.json" line="64"/>
        <source>Click on the CT-abdomen 
preset to automatically adjust 
the window/level display of the 
CT dataset</source>
        <extracomment>12_ArrowText_0</extracomment>
        <translation type="unfinished">روی پیش‌تنظیم CT-abdomen کلیک کنید تا نمایش پنجره/سطح داده‌سنج CT را به‌طور خودکار تنظیم کند.</translation>
    </message>
    <message>
        <location filename="text_dict_default.json" line="68"/>
        <source>Position the mouse cursor 
over the red banner in the 
Red Viewer to display the slice 
menu.


Click on the Links icon to link 
the slice controls across all 
Slice Viewers. 


Click on the Eye icon to
display the three anatomical 
slices in the 3D Viewer</source>
        <extracomment>13_TextBox_1</extracomment>
        <translation type="unfinished">نشانگر ماوس را روی بنر قرمز در Red Viewer قرار دهید تا منوی برش نمایش داده شود.


روی آیکون پیوندها کلیک کنید تا کنترل‌های اسلایس در تمام Slice Viewers به هم متصل شوند.


روی آیکون چشم کلیک کنید تا سه برش آناتومیک را در 3D Viewer نمایش دهید.</translation>
    </message>
    <message>
        <location filename="text_dict_default.json" line="72"/>
        <source>The three anatomical slices 
appear in the 3D viewer.</source>
        <extracomment>14_TextBox_0</extracomment>
        <translation type="unfinished">سه برش آناتومیک در نماگر سه‌بعدی ظاهر می‌شوند.</translation>
    </message>
    <message>
        <location filename="text_dict_default.json" line="76"/>
        <source>Click on the Slicer layout menu 
icon, and select the 
Conventional Widescreen layout</source>
        <extracomment>15_ArrowText_0</extracomment>
        <translation type="unfinished">روی آیکون منوی چیدمان اسلایسر کلیک کنید و چیدمان «Conventional Widescreen» را انتخاب کنید.</translation>
    </message>
    <message>
        <location filename="text_dict_default.json" line="80"/>
        <source>Slicer switches the layout 
to Conventional 
Widescreen layout</source>
        <extracomment>16_TextBox_0</extracomment>
        <translation type="unfinished">اسلایسر طرح‌بندی را به طرح‌بندی وایداسکرین متعارف تغییر می‌دهد.</translation>
    </message>
    <message>
        <location filename="text_dict_default.json" line="84"/>
        <source>Use the right mouse button in the 
3D Viewer to zoom in and out</source>
        <extracomment>17_TextBox_0</extracomment>
        <translation type="unfinished">برای بزرگنمایی و کوچک‌نمایی در 
نمایشگر سه‌بعدی از دکمه سمت راست ماوس استفاده کنید</translation>
    </message>
    <message>
        <location filename="text_dict_default.json" line="88"/>
        <source>Use the left mouse button in the 
3D Viewer to rotate the images</source>
        <extracomment>18_TextBox_0</extracomment>
        <translation type="unfinished">برای چرخاندن تصاویر در 
نمایشگر سه‌بعدی از دکمهٔ چپ ماوس استفاده کنید</translation>
    </message>
    <message>
        <location filename="text_dict_default.json" line="90"/>
        <location filename="text_dict_default.json" line="94"/>
        <source>3D Viewer Controller</source>
        <extracomment>19_3DViewerController_title
----------
20_3DViewerController_title</extracomment>
        <translation type="unfinished">کنترل‌کنندهٔ ویور سه‌بعدی</translation>
    </message>
    <message>
        <location filename="text_dict_default.json" line="92"/>
        <source>Position the mouse cursor over 
the pin icon in the blue banner 
of the 3D viewer window to 
display the 3DView controller

Click on the second icon on the 
top row of the 3DView 
controller to center the 3D view 
on the scene</source>
        <extracomment>19_TextBox_1</extracomment>
        <translation type="unfinished">برای نمایش کنترل‌کننده 3DView، نشانگر ماوس را روی آیکون سنجاق در بنر آبی پنجره ویور سه‌بعدی قرار دهید.

روی آیکون دوم در ردیف بالای کنترل‌کننده 3DView کلیک کنید تا نمای سه‌بعدی روی صحنه مرکزدهی شود.</translation>
    </message>
    <message>
        <location filename="text_dict_default.json" line="96"/>
        <source>Select the Volume Rendering 
module in the list of modules </source>
        <extracomment>20_ArrowText_1</extracomment>
        <translation type="unfinished">ماژول رندر حجمی را از فهرست ماژول‌ها انتخاب کنید </translation>
    </message>
    <message>
        <location filename="text_dict_default.json" line="98"/>
        <source>Part 2: Volume Rendering</source>
        <extracomment>21_TextBox_0</extracomment>
        <translation type="unfinished">بخش ۲: رندر حجمی</translation>
    </message>
    <message>
        <location filename="text_dict_default.json" line="100"/>
        <location filename="text_dict_default.json" line="104"/>
        <location filename="text_dict_default.json" line="108"/>
        <location filename="text_dict_default.json" line="112"/>
        <location filename="text_dict_default.json" line="116"/>
        <location filename="text_dict_default.json" line="120"/>
        <location filename="text_dict_default.json" line="124"/>
        <location filename="text_dict_default.json" line="128"/>
        <location filename="text_dict_default.json" line="132"/>
        <location filename="text_dict_default.json" line="136"/>
        <source>Volume Rendering</source>
        <extracomment>22_TextBox_0
----------
23_VolumeRendering_title
----------
24_VolumeRendering_title
----------
25_VolumeRendering_title
----------
26_VolumeRendering_title
----------
27_VolumeRendering_title
----------
28_VolumeRendering_title
----------
29_VolumeRendering_title
----------
30_VolumeRendering_title
----------
31_VolumeRendering_title</extracomment>
        <translation type="unfinished">رندر حجمی</translation>
    </message>
    <message>
        <location filename="text_dict_default.json" line="102"/>
        <source>• Volume rendering 
techniques enable 3D 
visualization of 3D 
datasets

• The Volume Rendering 
module in Slicer enables 
interactive 3D visualization 
of DICOM images</source>
        <extracomment>22_TextBox_1</extracomment>
        <translation type="unfinished">• تکنیک‌های رندر حجمی، تجسم سه‌بعدی مجموعه‌های داده سه‌بعدی را امکان‌پذیر می‌سازند.

• ماژول رندر حجمی در Slicer، تجسم سه‌بعدی تعاملی تصاویر DICOM را امکان‌پذیر می‌سازد.</translation>
    </message>
    <message>
        <location filename="text_dict_default.json" line="106"/>
        <source>Click on Preset in the Display tab 
and select the preset CT-Cardiac3 </source>
        <extracomment>23_ArrowText_0</extracomment>
        <translation type="unfinished">در زبانه Display روی Preset کلیک کرده و preset CT-Cardiac3 را انتخاب کنید. </translation>
    </message>
    <message>
        <location filename="text_dict_default.json" line="110"/>
        <source>Select VTK GPU Ray Casting Rendering
Click on the eye icon in the Volume tab to display 
the volume rendered image in the 3D viewer</source>
        <extracomment>24_TextBox_2</extracomment>
        <translation type="unfinished">رندر پرتونگاری GPU VTK را انتخاب کنید.
برای نمایش تصویر رندر شده حجم در ویوور سه‌بعدی، روی آیکون چشم در زبانه Volume کلیک کنید.</translation>
    </message>
    <message>
        <location filename="text_dict_default.json" line="114"/>
        <source>Use the shift slider to 
change the transfer 
function and display the
aorta</source>
        <extracomment>25_ArrowText_0</extracomment>
        <translation type="unfinished">از اسلایدر جابجایی برای تغییر تابع انتقال و نمایش آئورت استفاده کنید.</translation>
    </message>
    <message>
        <location filename="text_dict_default.json" line="118"/>
        <source>Click on Display ROI to 
display a region of interest 
(ROI) in the 3D viewer and 
check the option Enable</source>
        <extracomment>26_ArrowText_0</extracomment>
        <translation type="unfinished">روی «نمایش ROI» کلیک کنید تا یک ناحیهٔ مورد علاقه (ROI) در نمایگر سه‌بعدی نمایش داده شود و گزینهٔ «فعال‌سازی» را علامت بزنید.</translation>
    </message>
    <message>
        <location filename="text_dict_default.json" line="122"/>
        <source>Turn off the visibility of the 
axial, sagittal and coronal 
slices in the 2D viewer 


Position the ROI around the 
left kidney using the color 
handles</source>
        <extracomment>27_TextBox_0</extracomment>
        <translation type="unfinished">نمایش برش‌های عرضی، طولی و فرعی را در نماگر دوبعدی خاموش کنید


با استفاده از دسته‌های رنگی، ROI را اطراف کلیه چپ قرار دهید</translation>
    </message>
    <message>
        <location filename="text_dict_default.json" line="126"/>
        <source>Click on the eye icon to 
display the volume rendered 
image</source>
        <extracomment>28_ArrowText_0</extracomment>
        <translation type="unfinished">روی آیکون چشم کلیک کنید تا تصویر حجم‌رندر شده نمایش داده شود.</translation>
    </message>
    <message>
        <location filename="text_dict_default.json" line="130"/>
        <source>Slicer displays the 
volume rendered 
image of the left kidney </source>
        <extracomment>29_TextBox_0</extracomment>
        <translation type="unfinished">اسلایسر تصویر حجم‌نمایی‌شده‌ی کلیهٔ چپ را نمایش می‌دهد </translation>
    </message>
    <message>
        <location filename="text_dict_default.json" line="134"/>
        <source>Extend the ROI to generate 
a volume rendered image of 
the right kidney</source>
        <extracomment>30_TextBox_0</extracomment>
        <translation type="unfinished">ROI را گسترش دهید تا یک تصویر حجم‌نمایی‌شده از کلیه راست تولید شود</translation>
    </message>
    <message>
        <location filename="text_dict_default.json" line="138"/>
        <source>Click on File, then Close Scene
in the main menu</source>
        <extracomment>31_ArrowText_1</extracomment>
        <translation type="unfinished">در منوی اصلی، روی «File» و سپس «Close Scene» کلیک کنید.</translation>
    </message>
    <message>
        <location filename="text_dict_default.json" line="140"/>
        <source>Part 3: Loading and 
viewing 3D models
</source>
        <extracomment>32_TextBox_0</extracomment>
        <translation type="unfinished">بخش ۳: بارگذاری و مشاهده مدل‌های سه‌بعدی
</translation>
    </message>
    <message>
        <location filename="text_dict_default.json" line="144"/>
        <source>• The directory dataset2_Head contains the Slicer scene called Head_scene.mrb

• The scene contains 3D models from the SPL brain atlas developed by the department of Radiology at Brigham and Women’s Hospital, Harvard Medical School (NIH P41 RR013218, NIH R01 MH05074)</source>
        <extracomment>33_TextBox_1</extracomment>
        <translation type="unfinished">• دایرکتوری dataset2_Head حاوی صحنه Slicer به نام Head_scene.mrb است.

• این صحنه شامل مدل‌های سه‌بعدی از اطلس مغز SPL است که توسط دپارتمان رادیولوژی در بیمارستان بریگام و زنان، دانشکده پزشکی هاروارد (NIH P41 RR013218, NIH R01 MH05074) توسعه یافته است.</translation>
    </message>
    <message>
        <location filename="text_dict_default.json" line="146"/>
        <source>Slicer Scene</source>
        <extracomment>34_TextBox_0</extracomment>
        <translation type="unfinished">صحنهٔ اسلایسر</translation>
    </message>
    <message>
        <location filename="text_dict_default.json" line="148"/>
        <source>Slicer stores all loaded data in a repository called a scene


Each data set, such as an image volume, surface model, or point set, is represented as a node in a Slicer scene.


All Slicer modules operate on the data stored in a Slicer scene.</source>
        <extracomment>34_TextBox_1</extracomment>
        <translation type="unfinished">Slicer تمام داده‌های بارگذاری‌شده را در مخزنی به نام صحنه ذخیره می‌کند.

هر مجموعه داده، مانند حجم تصویر، مدل سطح یا مجموعه نقاط، به صورت یک گره در صحنه Slicer نمایش داده می‌شود.

تمام ماژول‌های Slicer بر روی داده‌های ذخیره‌شده در صحنه Slicer عمل می‌کنند.</translation>
    </message>
    <message>
        <location filename="text_dict_default.json" line="150"/>
        <source>Loading a Scene</source>
        <extracomment>35_LoadingaScene_title</extracomment>
        <translation type="unfinished">بارگذاری صحنه</translation>
    </message>
    <message>
        <location filename="text_dict_default.json" line="152"/>
        <source>Slicer displays a 3D 
surface model of the 
head and 2D MRI slices</source>
        <extracomment>35_TextBox_0</extracomment>
        <translation type="unfinished">اسلایسر یک مدل سطح سه‌بعدی از سر و برش‌های دو‌بعدی MRI را نمایش می‌دهد.</translation>
    </message>
    <message>
        <location filename="text_dict_default.json" line="154"/>
        <location filename="text_dict_default.json" line="158"/>
        <location filename="text_dict_default.json" line="162"/>
        <location filename="text_dict_default.json" line="166"/>
        <location filename="text_dict_default.json" line="172"/>
        <source>Viewing 3D models</source>
        <extracomment>36_Viewing3Dmodels_title
----------
37_Viewing3Dmodels_title
----------
38_Viewing3Dmodels_title
----------
39_Viewing3Dmodels_title
----------
40_Viewing3Dmodels_title</extracomment>
        <translation type="unfinished">مشاهده مدل‌های سه‌بعدی</translation>
    </message>
    <message>
        <location filename="text_dict_default.json" line="156"/>
        <source>Position the cursor over 
the pin icon to reveal the 
slice menu and click on 
the eye icon to display the 
axial slice in the 3D viewer</source>
        <extracomment>36_ArrowText_0</extracomment>
        <translation type="unfinished">نشانگر را روی آیکون پین قرار دهید تا منوی برش نمایش داده شود و روی آیکون چشم کلیک کنید تا برش محوری در نمایگر سه‌بعدی نمایش داده شود.</translation>
    </message>
    <message>
        <location filename="text_dict_default.json" line="160"/>
        <source>Select the Models module 
in the list of models</source>
        <extracomment>37_ArrowText_1</extracomment>
        <translation type="unfinished">ماژول مدل‌ها را در فهرست مدل‌ها انتخاب کنید</translation>
    </message>
    <message>
        <location filename="text_dict_default.json" line="164"/>
        <source>Slicer displays the list of 
3D models loaded in the 
scene

Select the model Skin.vtk</source>
        <extracomment>38_ArrowText_0</extracomment>
        <translation type="unfinished">اسلایسر فهرست مدل‌های سه‌بعدی بارگذاری‌شده در صحنه را نمایش می‌دهد

مدل Skin.vtk را انتخاب کنید</translation>
    </message>
    <message>
        <location filename="text_dict_default.json" line="168"/>
        <source>Lower the opacity of 
the Skin model using 
the visibility slider</source>
        <extracomment>39_ArrowText_0</extracomment>
        <translation type="unfinished">با استفاده از اسلایدر دید، شفافیت مدل پوست را کاهش دهید.</translation>
    </message>
    <message>
        <location filename="text_dict_default.json" line="170"/>
        <source>The skull bone and 
eyeballs models appear 
through the skin</source>
        <extracomment>39_TextBox_1</extracomment>
        <translation type="unfinished">مدل‌های استخوان جمجمه و چشم‌ها از طریق پوست دیده می‌شوند.</translation>
    </message>
    <message>
        <location filename="text_dict_default.json" line="174"/>
        <source>Select the skull bone 
model and click on the 
eye icon to turn off its 
visibility</source>
        <extracomment>40_ArrowText_1</extracomment>
        <translation type="unfinished">مدل استخوان جمجمه را انتخاب کرده و روی آیکون چشم کلیک کنید تا دید آن غیرفعال شود.</translation>
    </message>
    <message>
        <location filename="text_dict_default.json" line="176"/>
        <source>The white matter and 
optic nerve models 
appear through the skin</source>
        <extracomment>40_TextBox_2</extracomment>
        <translation type="unfinished">مدل‌های ماده سفید و عصب بینایی از طریق پوست نمایان می‌شوند</translation>
    </message>
    <message>
        <location filename="text_dict_default.json" line="178"/>
        <location filename="text_dict_default.json" line="182"/>
        <location filename="text_dict_default.json" line="186"/>
        <location filename="text_dict_default.json" line="190"/>
        <source>Interacting with 3D models</source>
        <extracomment>41_Interactingwith3Dmodels_title
----------
42_Interactingwith3Dmodels_title
----------
43_Interactingwith3Dmodels_title
----------
44_Interactingwith3Dmodels_title</extracomment>
        <translation type="unfinished">تعامل با مدل‌های سه‌بعدی</translation>
    </message>
    <message>
        <location filename="text_dict_default.json" line="180"/>
        <source>Click on the eye icon to 
display the coronal slice 
in the 3D viewer</source>
        <extracomment>41_ArrowText_0</extracomment>
        <translation type="unfinished">روی آیکون چشم کلیک کنید تا برش کرونال را در نماگر سه‌بعدی نمایش دهید.</translation>
    </message>
    <message>
        <location filename="text_dict_default.json" line="184"/>
        <source>Select the hemispheric 
white matter model and 
select the option Clipping</source>
        <extracomment>42_ArrowText_2</extracomment>
        <translation type="unfinished">مدل ماده سفید نیم‌کره‌ای را انتخاب کرده و گزینه کلیپینگ را انتخاب کنید.</translation>
    </message>
    <message>
        <location filename="text_dict_default.json" line="188"/>
        <source>Move the coronal slice 
posteriorily to display the 
optic chiasm</source>
        <extracomment>43_TextBox_0</extracomment>
        <translation type="unfinished">برش کرونال را به سمت خلف حرکت دهید تا کیاسم بینایی نمایش داده شود.</translation>
    </message>
    <message>
        <location filename="text_dict_default.json" line="192"/>
        <source>Slicer displays a 3D view of 
the optic chiasm</source>
        <extracomment>44_TextBox_0</extracomment>
        <translation type="unfinished">اسلایسر نمای سه‌بعدی از کراس‌مغزی را نمایش می‌دهد</translation>
    </message>
    <message>
        <location filename="text_dict_default.json" line="194"/>
        <source>Conclusion</source>
        <extracomment>45_TextBox_0</extracomment>
        <translation type="unfinished">نتیجه‌گیری</translation>
    </message>
    <message>
        <location filename="text_dict_default.json" line="196"/>
        <source>• 3D Slicer provides advanced functionalities for loading and viewing 3D medical imaging data

• The tutorial demonstrates how to use volume rendering and 3D surface modeling for interactive visualization of CT and MRI data


Contact: spujol@bwh.harvard.edu</source>
        <extracomment>45_TextBox_1</extracomment>
        <translation type="unfinished">• اسلایسر سه‌بعدی (3D Slicer) قابلیت‌های پیشرفته‌ای برای بارگذاری و مشاهده داده‌های تصویربرداری پزشکی سه‌بعدی فراهم می‌کند.

• این آموزش نحوه استفاده از رندر حجمی و مدل‌سازی سطح سه‌بعدی را برای بصری‌سازی تعاملی داده‌های سی‌تی (CT) و ام‌آر‌آی (MRI) نشان می‌دهد.

تماس: spujol@bwh.harvard.edu</translation>
    </message>
    <message>
        <location filename="text_dict_default.json" line="198"/>
        <source>Acknowledgements</source>
        <extracomment>46_TextBox_0</extracomment>
        <translation type="unfinished">تشکر و قدردانی</translation>
    </message>
    <message>
        <location filename="text_dict_default.json" line="200"/>
        <source>Neuroimage Analysis Center (NIBIB P41 EB015902)</source>
        <extracomment>46_TextBox_1</extracomment>
        <translation type="unfinished">مرکز تحلیل نوروایمج (NIBIB P41 EB015902)</translation>
    </message>
</context>
</TS>

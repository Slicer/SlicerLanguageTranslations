<?xml version="1.0" encoding="utf-8"?>
<!DOCTYPE TS>
<TS version="2.1" language="zh_Hant">
<context>
    <name>TutorialMaker</name>
    <message>
        <location filename="text_dict_default.json" line="8"/>
        <source>Basics of Data Loading and 3D Visualization in 3D Slicer</source>
        <extracomment>0_TextBox_0</extracomment>
        <translation>3D Slicer 資料載入與 3D 視覺化基礎</translation>
    </message>
    <message>
        <location filename="text_dict_default.json" line="10"/>
        <source>Author: Sonia Pujol, Ph.D.</source>
        <extracomment>0_TextBox_1</extracomment>
        <translation>作者：Sonia Pujol 博士</translation>
    </message>
    <message>
        <location filename="text_dict_default.json" line="12"/>
        <source>24/11/2024</source>
        <extracomment>0_TextBox_2</extracomment>
        <translation>2024 年 11 月 24 日</translation>
    </message>
    <message>
        <location filename="text_dict_default.json" line="14"/>
        <source>Assistant Professor of Radiology Brigham and Women’s Hospital Harvard Medical School</source>
        <extracomment>0_TextBox_3</extracomment>
        <translation>布萊根婦女醫院暨哈佛醫學院放射學助理教授</translation>
    </message>
    <message>
        <location filename="text_dict_default.json" line="16"/>
        <source>Overall Goal</source>
        <extracomment>1_TextBox_0</extracomment>
        <translation>整體目標</translation>
    </message>
    <message>
        <location filename="text_dict_default.json" line="18"/>
        <source>This tutorial is an introduction to the basics of loading and viewing DICOM images and 3D models in 3D Slicer.</source>
        <extracomment>1_TextBox_1</extracomment>
        <translation>本教學介紹在 3D Slicer 中載入及檢視 DICOM 影像與 3D 模型的基本操作。</translation>
    </message>
    <message>
        <location filename="text_dict_default.json" line="20"/>
        <source>Learning Objectives</source>
        <extracomment>2_TextBox_0</extracomment>
        <translation>學習目標</translation>
    </message>
    <message>
        <location filename="text_dict_default.json" line="22"/>
        <source> • Following this tutorial, you will be able

• to load and visualize DICOM images in Slicer

• to perform volume rendering of CT data

• to load and visualize 3D models reconstructed from MRI data</source>
        <extracomment>2_TextBox_1</extracomment>
        <translation> • 完成本教學後，您將能夠

• 在 Slicer 中載入 DICOM 影像並進行視覺化

• 對 CT 資料進行影像體積渲染

• 載入由 MRI 資料重建的 3D 模型並進行視覺化</translation>
    </message>
    <message>
        <location filename="text_dict_default.json" line="24"/>
        <source>Tutorial materials</source>
        <extracomment>3_TextBox_0</extracomment>
        <translation>教學教材</translation>
    </message>
    <message>
        <location filename="text_dict_default.json" line="26"/>
        <source>• 3D Slicer version 5.10

•  3D VisualizationDataSet.zip</source>
        <extracomment>3_TextBox_1</extracomment>
        <translation>• 3D Slicer 5.10 版

•  3D VisualizationDataSet.zip</translation>
    </message>
    <message>
        <location filename="text_dict_default.json" line="28"/>
        <location filename="text_dict_default.json" line="142"/>
        <source>Tutorial dataset</source>
        <extracomment>4_TextBox_0
----------
33_TextBox_0</extracomment>
        <translation>教學資料集</translation>
    </message>
    <message>
        <location filename="text_dict_default.json" line="30"/>
        <source>The file 3DVisualizationDataset.zip contains two directories:

- dataset1_Thorax_Abdomen 
- dataset2_Head

Unzip the file 3DVisualizationDataset.zip on your computer to access the datasets</source>
        <extracomment>4_TextBox_1</extracomment>
        <translation>3DVisualizationDataset.zip 檔案包含兩個資料夾：

- dataset1_Thorax_Abdomen 
- dataset2_Head

請在電腦上解壓縮 3DVisualizationDataset.zip 檔案以存取資料集</translation>
    </message>
    <message>
        <location filename="text_dict_default.json" line="32"/>
        <source>Disclaimer</source>
        <extracomment>5_TextBox_0</extracomment>
        <translation>免責聲明</translation>
    </message>
    <message>
        <location filename="text_dict_default.json" line="34"/>
        <source>• 3D Slicer is a free open source software application distributed under a BSD style license. 


• The software is not FDA approved or CE-Marked, and is for research use only.
</source>
        <extracomment>5_TextBox_1</extracomment>
        <translation>• 3D Slicer 是依 BSD 類型授權條款散布的自由開放原始碼軟體應用程式。


• 本軟體未經 FDA 核准，也未取得 CE 標誌，僅供研究使用。
</translation>
    </message>
    <message>
        <location filename="text_dict_default.json" line="36"/>
        <source>Tutorial Outline</source>
        <extracomment>6_TextBox_0</extracomment>
        <translation>教學大綱</translation>
    </message>
    <message>
        <location filename="text_dict_default.json" line="38"/>
        <source>•  Part 1: Loading and Viewing DICOM data

•  Part 2: Volume Rendering


• Part 3: Loading and Viewing 3D models</source>
        <extracomment>6_TextBox_1</extracomment>
        <translation>•  第 1 部分：載入與檢視 DICOM 資料

•  第 2 部分：影像體積渲染


• 第 3 部分：載入與檢視 3D 模型</translation>
    </message>
    <message>
        <location filename="text_dict_default.json" line="40"/>
        <source>Part 1: DICOM Data Loading</source>
        <extracomment>7_TextBox_0</extracomment>
        <translation>第 1 部分：載入 DICOM 資料</translation>
    </message>
    <message>
        <location filename="text_dict_default.json" line="42"/>
        <location filename="text_dict_default.json" line="48"/>
        <source>Loading a DICOM volume</source>
        <extracomment>8_LoadingaDICOMvolume_title
----------
9_LoadingaDICOMvolume_title</extracomment>
        <translation>載入 DICOM 影像體積</translation>
    </message>
    <message>
        <location filename="text_dict_default.json" line="44"/>
        <source>Slicer displays the user interface of the DICOM module</source>
        <extracomment>8_TextBox_0</extracomment>
        <translation>Slicer 顯示 DICOM 模組的使用者介面</translation>
    </message>
    <message>
        <location filename="text_dict_default.json" line="46"/>
        <source>The patient1 study contains a CT Thorax Abdomen dataset</source>
        <extracomment>8_TextBox_1</extracomment>
        <translation>patient1 檢查包含一組胸腹部 CT 資料集</translation>
    </message>
    <message>
        <location filename="text_dict_default.json" line="50"/>
        <source>Select patient1 and click on Load 
to load the dataset in Slicer</source>
        <extracomment>9_ArrowText_1</extracomment>
        <translation>選取 patient1 並點選「載入」
即可將資料集載入 Slicer</translation>
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
        <translation>DICOM 影像視覺化</translation>
    </message>
    <message>
        <location filename="text_dict_default.json" line="54"/>
        <source>Slicer displays the axial, coronal 
and sagittal images of the CT 
Thorax Abdomen dataset </source>
        <extracomment>10_TextBox_0</extracomment>
        <translation>Slicer 顯示 CT 胸腹部資料集的軸向、
冠狀及矢狀
影像 </translation>
    </message>
    <message>
        <location filename="text_dict_default.json" line="58"/>
        <source>Left click on DICOM to display 
the list of modules of Slicer</source>
        <extracomment>11_ArrowText_1</extracomment>
        <translation>在 DICOM 上按一下滑鼠左鍵，以顯示
Slicer 模組清單</translation>
    </message>
    <message>
        <location filename="text_dict_default.json" line="60"/>
        <source>Select the module 
Volumes</source>
        <extracomment>11_ArrowText_2</extracomment>
        <translation>選取「影像體積」
模組</translation>
    </message>
    <message>
        <location filename="text_dict_default.json" line="64"/>
        <source>Click on the CT-abdomen 
preset to automatically adjust 
the window/level display of the 
CT dataset</source>
        <extracomment>12_ArrowText_0</extracomment>
        <translation>點選「腹部 CT」
預設集，以自動調整
CT 資料集顯示的
窗位／窗寬</translation>
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
        <translation>將滑鼠游標移至
紅色檢視器中的
紅色橫幅上，以顯示切片
選單。


點選「連結」圖示，以連結
所有切片視圖的
切片控制項。


點選「眼睛」圖示，以
在 3D 檢視器中顯示三個解剖
切片</translation>
    </message>
    <message>
        <location filename="text_dict_default.json" line="72"/>
        <source>The three anatomical slices 
appear in the 3D viewer.</source>
        <extracomment>14_TextBox_0</extracomment>
        <translation>三個解剖切片
顯示於 3D 檢視器中。</translation>
    </message>
    <message>
        <location filename="text_dict_default.json" line="76"/>
        <source>Click on the Slicer layout menu 
icon, and select the 
Conventional Widescreen layout</source>
        <extracomment>15_ArrowText_0</extracomment>
        <translation>點選 Slicer 版面配置選單
圖示，然後選取
「寬螢幕標準」版面配置</translation>
    </message>
    <message>
        <location filename="text_dict_default.json" line="80"/>
        <source>Slicer switches the layout 
to Conventional 
Widescreen layout</source>
        <extracomment>16_TextBox_0</extracomment>
        <translation>Slicer 將版面配置
切換為「寬螢幕
標準」版面配置</translation>
    </message>
    <message>
        <location filename="text_dict_default.json" line="84"/>
        <source>Use the right mouse button in the 
3D Viewer to zoom in and out</source>
        <extracomment>17_TextBox_0</extracomment>
        <translation>在 3D 檢視器中按住
滑鼠右鍵以縮放</translation>
    </message>
    <message>
        <location filename="text_dict_default.json" line="88"/>
        <source>Use the left mouse button in the 
3D Viewer to rotate the images</source>
        <extracomment>18_TextBox_0</extracomment>
        <translation>在 3D 檢視器中按住
滑鼠左鍵以旋轉影像</translation>
    </message>
    <message>
        <location filename="text_dict_default.json" line="90"/>
        <location filename="text_dict_default.json" line="94"/>
        <source>3D Viewer Controller</source>
        <extracomment>19_3DViewerController_title
----------
20_3DViewerController_title</extracomment>
        <translation>3D 檢視器控制器</translation>
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
        <translation>將滑鼠游標移至
3D 檢視器視窗藍色橫幅的
圖釘圖示上，以
顯示 3D 視圖控制器

點選 3D 視圖
控制器頂端列的
第二個圖示，將 3D 視圖
置中顯示場景</translation>
    </message>
    <message>
        <location filename="text_dict_default.json" line="96"/>
        <source>Select the Volume Rendering 
module in the list of modules </source>
        <extracomment>20_ArrowText_1</extracomment>
        <translation>從模組清單選取「影像體積渲染」
模組 </translation>
    </message>
    <message>
        <location filename="text_dict_default.json" line="98"/>
        <source>Part 2: Volume Rendering</source>
        <extracomment>21_TextBox_0</extracomment>
        <translation>第 2 部分：影像體積渲染</translation>
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
        <translation>影像體積渲染</translation>
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
        <translation>• 影像體積渲染
技術可呈現 3D
資料集的 3D
視覺化效果

• Slicer 的影像體積渲染
模組可讓使用者以互動方式
呈現 DICOM 影像的 3D
視覺化效果</translation>
    </message>
    <message>
        <location filename="text_dict_default.json" line="106"/>
        <source>Click on Preset in the Display tab 
and select the preset CT-Cardiac3 </source>
        <extracomment>23_ArrowText_0</extracomment>
        <translation>在「顯示」分頁點選「預設」
並選取「CT-Cardiac3」預設集 </translation>
    </message>
    <message>
        <location filename="text_dict_default.json" line="110"/>
        <source>Select VTK GPU Ray Casting Rendering
Click on the eye icon in the Volume tab to display 
the volume rendered image in the 3D viewer</source>
        <extracomment>24_TextBox_2</extracomment>
        <translation>選取「VTK GPU 光線投射渲染」
點選「影像體積」分頁中的眼睛圖示，以在
3D 檢視器中顯示影像體積渲染結果</translation>
    </message>
    <message>
        <location filename="text_dict_default.json" line="114"/>
        <source>Use the shift slider to 
change the transfer 
function and display the
aorta</source>
        <extracomment>25_ArrowText_0</extracomment>
        <translation>使用位移滑桿
變更傳遞
函數並顯示
主動脈</translation>
    </message>
    <message>
        <location filename="text_dict_default.json" line="118"/>
        <source>Click on Display ROI to 
display a region of interest 
(ROI) in the 3D viewer and 
check the option Enable</source>
        <extracomment>26_ArrowText_0</extracomment>
        <translation>點選「顯示 ROI」，以
在 3D 檢視器中顯示感興趣區域
（ROI），並
勾選「啟用」選項</translation>
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
        <translation>在 2D 檢視器中關閉
軸向、矢狀及冠狀
切片的顯示 


使用彩色
控制點，將 ROI 移至
左腎周圍</translation>
    </message>
    <message>
        <location filename="text_dict_default.json" line="126"/>
        <source>Click on the eye icon to 
display the volume rendered 
image</source>
        <extracomment>28_ArrowText_0</extracomment>
        <translation>點選眼睛圖示，以
顯示影像體積渲染
結果</translation>
    </message>
    <message>
        <location filename="text_dict_default.json" line="130"/>
        <source>Slicer displays the 
volume rendered 
image of the left kidney </source>
        <extracomment>29_TextBox_0</extracomment>
        <translation>Slicer 顯示
左腎的影像體積渲染
結果 </translation>
    </message>
    <message>
        <location filename="text_dict_default.json" line="134"/>
        <source>Extend the ROI to generate 
a volume rendered image of 
the right kidney</source>
        <extracomment>30_TextBox_0</extracomment>
        <translation>擴大 ROI，以產生
右腎的影像體積渲染
結果</translation>
    </message>
    <message>
        <location filename="text_dict_default.json" line="138"/>
        <source>Click on File, then Close Scene
in the main menu</source>
        <extracomment>31_ArrowText_1</extracomment>
        <translation>在主選單中點選「檔案」，
再點選「關閉場景」</translation>
    </message>
    <message>
        <location filename="text_dict_default.json" line="140"/>
        <source>Part 3: Loading and 
viewing 3D models
</source>
        <extracomment>32_TextBox_0</extracomment>
        <translation>第 3 部分：載入與
檢視 3D 模型
</translation>
    </message>
    <message>
        <location filename="text_dict_default.json" line="144"/>
        <source>• The directory dataset2_Head contains the Slicer scene called Head_scene.mrb

• The scene contains 3D models from the SPL brain atlas developed by the department of Radiology at Brigham and Women’s Hospital, Harvard Medical School (NIH P41 RR013218, NIH R01 MH05074)</source>
        <extracomment>33_TextBox_1</extracomment>
        <translation>• dataset2_Head 資料夾包含名為 Head_scene.mrb 的 Slicer 場景

• 此場景包含哈佛醫學院布萊根婦女醫院放射科所開發之 SPL 腦部圖譜的 3D 模型（NIH P41 RR013218、NIH R01 MH05074）</translation>
    </message>
    <message>
        <location filename="text_dict_default.json" line="146"/>
        <source>Slicer Scene</source>
        <extracomment>34_TextBox_0</extracomment>
        <translation>Slicer 場景</translation>
    </message>
    <message>
        <location filename="text_dict_default.json" line="148"/>
        <source>Slicer stores all loaded data in a repository called a scene


Each data set, such as an image volume, surface model, or point set, is represented as a node in a Slicer scene.


All Slicer modules operate on the data stored in a Slicer scene.</source>
        <extracomment>34_TextBox_1</extracomment>
        <translation>Slicer 會將所有載入的資料儲存在稱為場景的儲存區中


每個資料集（例如影像體積、表面模型或點集）在 Slicer 場景中都以節點表示。


所有 Slicer 模組都會處理儲存在 Slicer 場景中的資料。</translation>
    </message>
    <message>
        <location filename="text_dict_default.json" line="150"/>
        <source>Loading a Scene</source>
        <extracomment>35_LoadingaScene_title</extracomment>
        <translation>載入場景</translation>
    </message>
    <message>
        <location filename="text_dict_default.json" line="152"/>
        <source>Slicer displays a 3D 
surface model of the 
head and 2D MRI slices</source>
        <extracomment>35_TextBox_0</extracomment>
        <translation>Slicer 顯示頭部的 3D
表面模型與
2D MRI 切片</translation>
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
        <translation>檢視 3D 模型</translation>
    </message>
    <message>
        <location filename="text_dict_default.json" line="156"/>
        <source>Position the cursor over 
the pin icon to reveal the 
slice menu and click on 
the eye icon to display the 
axial slice in the 3D viewer</source>
        <extracomment>36_ArrowText_0</extracomment>
        <translation>將游標移至
圖釘圖示上，以顯示
切片選單，然後點選
眼睛圖示，以在
3D 檢視器中顯示軸向切片</translation>
    </message>
    <message>
        <location filename="text_dict_default.json" line="160"/>
        <source>Select the Models module 
in the list of models</source>
        <extracomment>37_ArrowText_1</extracomment>
        <translation>在模型清單中選取
「模型」模組</translation>
    </message>
    <message>
        <location filename="text_dict_default.json" line="164"/>
        <source>Slicer displays the list of 
3D models loaded in the 
scene

Select the model Skin.vtk</source>
        <extracomment>38_ArrowText_0</extracomment>
        <translation>Slicer 顯示已載入
場景的
3D 模型清單

選取 Skin.vtk 模型</translation>
    </message>
    <message>
        <location filename="text_dict_default.json" line="168"/>
        <source>Lower the opacity of 
the Skin model using 
the visibility slider</source>
        <extracomment>39_ArrowText_0</extracomment>
        <translation>使用可見度滑桿
降低 Skin 模型的
不透明度</translation>
    </message>
    <message>
        <location filename="text_dict_default.json" line="170"/>
        <source>The skull bone and 
eyeballs models appear 
through the skin</source>
        <extracomment>39_TextBox_1</extracomment>
        <translation>透過 Skin 模型可看到
顱骨與眼球
模型</translation>
    </message>
    <message>
        <location filename="text_dict_default.json" line="174"/>
        <source>Select the skull bone 
model and click on the 
eye icon to turn off its 
visibility</source>
        <extracomment>40_ArrowText_1</extracomment>
        <translation>選取顱骨模型，
然後點選眼睛
圖示以關閉它的
顯示</translation>
    </message>
    <message>
        <location filename="text_dict_default.json" line="176"/>
        <source>The white matter and 
optic nerve models 
appear through the skin</source>
        <extracomment>40_TextBox_2</extracomment>
        <translation>透過 Skin 模型可看到
白質與視神經
模型</translation>
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
        <translation>與 3D 模型互動</translation>
    </message>
    <message>
        <location filename="text_dict_default.json" line="180"/>
        <source>Click on the eye icon to 
display the coronal slice 
in the 3D viewer</source>
        <extracomment>41_ArrowText_0</extracomment>
        <translation>點選眼睛圖示，以
在 3D 檢視器中顯示
冠狀切片</translation>
    </message>
    <message>
        <location filename="text_dict_default.json" line="184"/>
        <source>Select the hemispheric 
white matter model and 
select the option Clipping</source>
        <extracomment>42_ArrowText_2</extracomment>
        <translation>選取半球
白質模型，並
選取「裁切」選項</translation>
    </message>
    <message>
        <location filename="text_dict_default.json" line="188"/>
        <source>Move the coronal slice 
posteriorily to display the 
optic chiasm</source>
        <extracomment>43_TextBox_0</extracomment>
        <translation>將冠狀切片
向後移動，以顯示
視交叉</translation>
    </message>
    <message>
        <location filename="text_dict_default.json" line="192"/>
        <source>Slicer displays a 3D view of 
the optic chiasm</source>
        <extracomment>44_TextBox_0</extracomment>
        <translation>Slicer 顯示
視交叉的 3D 視圖</translation>
    </message>
    <message>
        <location filename="text_dict_default.json" line="194"/>
        <source>Conclusion</source>
        <extracomment>45_TextBox_0</extracomment>
        <translation>結論</translation>
    </message>
    <message>
        <location filename="text_dict_default.json" line="196"/>
        <source>• 3D Slicer provides advanced functionalities for loading and viewing 3D medical imaging data

• The tutorial demonstrates how to use volume rendering and 3D surface modeling for interactive visualization of CT and MRI data


Contact: spujol@bwh.harvard.edu</source>
        <extracomment>45_TextBox_1</extracomment>
        <translation>• 3D Slicer 提供載入與檢視 3D 醫學影像資料的進階功能

• 本教學示範如何使用影像體積渲染與 3D 表面建模，以互動方式呈現 CT 及 MRI 資料


聯絡方式：spujol@bwh.harvard.edu</translation>
    </message>
    <message>
        <location filename="text_dict_default.json" line="198"/>
        <source>Acknowledgements</source>
        <extracomment>46_TextBox_0</extracomment>
        <translation>致謝</translation>
    </message>
    <message>
        <location filename="text_dict_default.json" line="200"/>
        <source>Neuroimage Analysis Center (NIBIB P41 EB015902)</source>
        <extracomment>46_TextBox_1</extracomment>
        <translation>神經影像分析中心（NIBIB P41 EB015902）</translation>
    </message>
</context>
</TS>

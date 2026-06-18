<?xml version="1.0" encoding="utf-8"?>
<!DOCTYPE TS>
<TS version="2.1" language="zh_Hans">
<context>
    <name>TutorialMaker</name>
    <message>
        <location filename="text_dict_default.json" line="8"/>
        <source>Basics of Data Loading and 3D Visualization in 3D Slicer</source>
        <extracomment>0_TextBox_0</extracomment>
        <translation type="unfinished">3D Slicer 中数据加载与 3D 可视化的基础知识</translation>
    </message>
    <message>
        <location filename="text_dict_default.json" line="10"/>
        <source>Author: Sonia Pujol, Ph.D.</source>
        <extracomment>0_TextBox_1</extracomment>
        <translation type="unfinished">作者：索尼娅·普霍尔 博士</translation>
    </message>
    <message>
        <location filename="text_dict_default.json" line="12"/>
        <source>24/11/2024</source>
        <extracomment>0_TextBox_2</extracomment>
        <translation type="unfinished">2024年11月24日</translation>
    </message>
    <message>
        <location filename="text_dict_default.json" line="14"/>
        <source>Assistant Professor of Radiology Brigham and Women’s Hospital Harvard Medical School</source>
        <extracomment>0_TextBox_3</extracomment>
        <translation type="unfinished">哈佛医学院布里格姆妇女医院放射科助理教授</translation>
    </message>
    <message>
        <location filename="text_dict_default.json" line="16"/>
        <source>Overall Goal</source>
        <extracomment>1_TextBox_0</extracomment>
        <translation type="unfinished">总体目标</translation>
    </message>
    <message>
        <location filename="text_dict_default.json" line="18"/>
        <source>This tutorial is an introduction to the basics of loading and viewing DICOM images and 3D models in 3D Slicer.</source>
        <extracomment>1_TextBox_1</extracomment>
        <translation type="unfinished">本教程介绍了在 3D Slicer 中加载和查看 DICOM 图像及 3D 模型的基础知识。</translation>
    </message>
    <message>
        <location filename="text_dict_default.json" line="20"/>
        <source>Learning Objectives</source>
        <extracomment>2_TextBox_0</extracomment>
        <translation type="unfinished">学习目标</translation>
    </message>
    <message>
        <location filename="text_dict_default.json" line="22"/>
        <source> • Following this tutorial, you will be able

• to load and visualize DICOM images in Slicer

• to perform volume rendering of CT data

• to load and visualize 3D models reconstructed from MRI data</source>
        <extracomment>2_TextBox_1</extracomment>
        <translation type="unfinished"> • 按照本教程操作，您将能够

• 在 Slicer 中加载并显示 DICOM 图像

• 对 CT 数据进行体积渲染

• 加载并显示由 MRI 数据重建的 3D 模型</translation>
    </message>
    <message>
        <location filename="text_dict_default.json" line="24"/>
        <source>Tutorial materials</source>
        <extracomment>3_TextBox_0</extracomment>
        <translation type="unfinished">教程资料</translation>
    </message>
    <message>
        <location filename="text_dict_default.json" line="26"/>
        <source>• 3D Slicer version 5.10

•  3D VisualizationDataSet.zip</source>
        <extracomment>3_TextBox_1</extracomment>
        <translation type="unfinished">• 3D Slicer 5.10 版

•  3D VisualizationDataSet.zip</translation>
    </message>
    <message>
        <location filename="text_dict_default.json" line="28"/>
        <location filename="text_dict_default.json" line="142"/>
        <source>Tutorial dataset</source>
        <extracomment>4_TextBox_0
----------
33_TextBox_0</extracomment>
        <translation type="unfinished">数据集教程</translation>
    </message>
    <message>
        <location filename="text_dict_default.json" line="30"/>
        <source>The file 3DVisualizationDataset.zip contains two directories:

- dataset1_Thorax_Abdomen 
- dataset2_Head

Unzip the file 3DVisualizationDataset.zip on your computer to access the datasets</source>
        <extracomment>4_TextBox_1</extracomment>
        <translation type="unfinished">文件 3DVisualizationDataset.zip 包含两个目录：

- dataset1_Thorax_Abdomen 
- dataset2_Head

请在您的计算机上解压文件 3DVisualizationDataset.zip 以访问这些数据集</translation>
    </message>
    <message>
        <location filename="text_dict_default.json" line="32"/>
        <source>Disclaimer</source>
        <extracomment>5_TextBox_0</extracomment>
        <translation type="unfinished">免责声明</translation>
    </message>
    <message>
        <location filename="text_dict_default.json" line="34"/>
        <source>• 3D Slicer is a free open source software application distributed under a BSD style license. 


• The software is not FDA approved or CE-Marked, and is for research use only.
</source>
        <extracomment>5_TextBox_1</extracomment>
        <translation type="unfinished">• 3D Slicer 是一款基于 BSD 风格许可证发布的免费开源软件。


• 该软件未获得 FDA 批准，也未获得 CE 认证，仅供研究使用。
</translation>
    </message>
    <message>
        <location filename="text_dict_default.json" line="36"/>
        <source>Tutorial Outline</source>
        <extracomment>6_TextBox_0</extracomment>
        <translation type="unfinished">教程大纲</translation>
    </message>
    <message>
        <location filename="text_dict_default.json" line="38"/>
        <source>•  Part 1: Loading and Viewing DICOM data

•  Part 2: Volume Rendering


• Part 3: Loading and Viewing 3D models</source>
        <extracomment>6_TextBox_1</extracomment>
        <translation type="unfinished">•  第 1 部分：加载和查看 DICOM 数据

•  第 2 部分：体积渲染


• 第 3 部分：加载和查看 3D 模型</translation>
    </message>
    <message>
        <location filename="text_dict_default.json" line="40"/>
        <source>Part 1: DICOM Data Loading</source>
        <extracomment>7_TextBox_0</extracomment>
        <translation type="unfinished">第 1 部分：DICOM 数据加载</translation>
    </message>
    <message>
        <location filename="text_dict_default.json" line="42"/>
        <location filename="text_dict_default.json" line="48"/>
        <source>Loading a DICOM volume</source>
        <extracomment>8_LoadingaDICOMvolume_title
----------
9_LoadingaDICOMvolume_title</extracomment>
        <translation type="unfinished">加载 DICOM 体积数据</translation>
    </message>
    <message>
        <location filename="text_dict_default.json" line="44"/>
        <source>Slicer displays the user interface of the DICOM module</source>
        <extracomment>8_TextBox_0</extracomment>
        <translation type="unfinished">Slicer 显示了 DICOM 模块的用户界面</translation>
    </message>
    <message>
        <location filename="text_dict_default.json" line="46"/>
        <source>The patient1 study contains a CT Thorax Abdomen dataset</source>
        <extracomment>8_TextBox_1</extracomment>
        <translation type="unfinished">患者1的研究包含一个胸部和腹部CT数据集</translation>
    </message>
    <message>
        <location filename="text_dict_default.json" line="50"/>
        <source>Select patient1 and click on Load 
to load the dataset in Slicer</source>
        <extracomment>9_ArrowText_1</extracomment>
        <translation type="unfinished">选择“patient1”，然后点击“加载”
将数据集加载到 Slicer 中</translation>
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
        <translation type="unfinished">DICOM 图像的可视化</translation>
    </message>
    <message>
        <location filename="text_dict_default.json" line="54"/>
        <source>Slicer displays the axial, coronal 
and sagittal images of the CT 
Thorax Abdomen dataset </source>
        <extracomment>10_TextBox_0</extracomment>
        <translation type="unfinished">Slicer 显示了 CT 
胸腹部数据集的轴位、冠状位
和矢状位图像</translation>
    </message>
    <message>
        <location filename="text_dict_default.json" line="58"/>
        <source>Left click on DICOM to display 
the list of modules of Slicer</source>
        <extracomment>11_ArrowText_1</extracomment>
        <translation type="unfinished">左键单击“DICOM”以显示
Slicer 的模块列表</translation>
    </message>
    <message>
        <location filename="text_dict_default.json" line="60"/>
        <source>Select the module 
Volumes</source>
        <extracomment>11_ArrowText_2</extracomment>
        <translation type="unfinished">选择模块
卷</translation>
    </message>
    <message>
        <location filename="text_dict_default.json" line="64"/>
        <source>Click on the CT-abdomen 
preset to automatically adjust 
the window/level display of the 
CT dataset</source>
        <extracomment>12_ArrowText_0</extracomment>
        <translation type="unfinished">点击“腹部CT”
预设，以自动调整
该CT数据集的
窗宽/窗位显示</translation>
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
        <translation type="unfinished">将鼠标光标
悬停在“红色查看器”中的
红色横幅上，以显示切片
菜单。


点击“链接”图标，将
所有“切片查看器”中的
切片控件相互关联。


点击“眼睛”图标，
在3D查看器中显示三个
解剖切片</translation>
    </message>
    <message>
        <location filename="text_dict_default.json" line="72"/>
        <source>The three anatomical slices 
appear in the 3D viewer.</source>
        <extracomment>14_TextBox_0</extracomment>
        <translation type="unfinished">这三个解剖切面
出现在3D查看器中。</translation>
    </message>
    <message>
        <location filename="text_dict_default.json" line="76"/>
        <source>Click on the Slicer layout menu 
icon, and select the 
Conventional Widescreen layout</source>
        <extracomment>15_ArrowText_0</extracomment>
        <translation type="unfinished">点击“切片器布局”菜单
图标，然后选择
“常规宽屏”布局</translation>
    </message>
    <message>
        <location filename="text_dict_default.json" line="80"/>
        <source>Slicer switches the layout 
to Conventional 
Widescreen layout</source>
        <extracomment>16_TextBox_0</extracomment>
        <translation type="unfinished">Slicer 将布局切换为
常规
宽屏布局</translation>
    </message>
    <message>
        <location filename="text_dict_default.json" line="84"/>
        <source>Use the right mouse button in the 
3D Viewer to zoom in and out</source>
        <extracomment>17_TextBox_0</extracomment>
        <translation type="unfinished">在
3D 查看器中使用鼠标右键进行放大或缩小</translation>
    </message>
    <message>
        <location filename="text_dict_default.json" line="88"/>
        <source>Use the left mouse button in the 
3D Viewer to rotate the images</source>
        <extracomment>18_TextBox_0</extracomment>
        <translation type="unfinished">在
3D 查看器中使用鼠标左键旋转图像</translation>
    </message>
    <message>
        <location filename="text_dict_default.json" line="90"/>
        <location filename="text_dict_default.json" line="94"/>
        <source>3D Viewer Controller</source>
        <extracomment>19_3DViewerController_title
----------
20_3DViewerController_title</extracomment>
        <translation type="unfinished">3D 查看器控制器</translation>
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
        <translation type="unfinished">将鼠标光标悬停在
3D 查看器窗口蓝色横幅中的
图钉图标上，以
显示 3DView 控制器

点击 3DView 控制器
顶部一排中的第二个图标，
将 3D 视图
居中对准场景</translation>
    </message>
    <message>
        <location filename="text_dict_default.json" line="96"/>
        <source>Select the Volume Rendering 
module in the list of modules </source>
        <extracomment>20_ArrowText_1</extracomment>
        <translation type="unfinished">在模块列表中选择“体积渲染”
模块</translation>
    </message>
    <message>
        <location filename="text_dict_default.json" line="98"/>
        <source>Part 2: Volume Rendering</source>
        <extracomment>21_TextBox_0</extracomment>
        <translation type="unfinished">第2部分：体积渲染</translation>
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
        <translation type="unfinished">体积渲染</translation>
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
        <translation type="unfinished">• 体积渲染
技术可实现对三维
数据集的
三维可视化

• Slicer 中的体积渲染
模块支持
对 DICOM 图像进行
交互式三维可视化</translation>
    </message>
    <message>
        <location filename="text_dict_default.json" line="106"/>
        <source>Click on Preset in the Display tab 
and select the preset CT-Cardiac3 </source>
        <extracomment>23_ArrowText_0</extracomment>
        <translation type="unfinished">在“显示”选项卡中点击“预设”
并选择预设“CT-Cardiac3”</translation>
    </message>
    <message>
        <location filename="text_dict_default.json" line="110"/>
        <source>Select VTK GPU Ray Casting Rendering
Click on the eye icon in the Volume tab to display 
the volume rendered image in the 3D viewer</source>
        <extracomment>24_TextBox_2</extracomment>
        <translation type="unfinished">选择 VTK GPU 光线投射渲染
点击“体积”选项卡中的眼睛图标，以在 3D 查看器中显示
体积渲染图像</translation>
    </message>
    <message>
        <location filename="text_dict_default.json" line="114"/>
        <source>Use the shift slider to 
change the transfer 
function and display the
aorta</source>
        <extracomment>25_ArrowText_0</extracomment>
        <translation type="unfinished">使用平移滑块来
改变传输
函数并显示
主动脉</translation>
    </message>
    <message>
        <location filename="text_dict_default.json" line="118"/>
        <source>Click on Display ROI to 
display a region of interest 
(ROI) in the 3D viewer and 
check the option Enable</source>
        <extracomment>26_ArrowText_0</extracomment>
        <translation type="unfinished">点击“显示ROI”以
在3D查看器中显示
感兴趣区域
(ROI)，并
勾选“启用”选项</translation>
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
        <translation type="unfinished">在 2D 查看器中关闭 
轴向、矢状和冠状 
切面的显示 


使用颜色 
控制柄将 ROI 定位在 
左肾周围</translation>
    </message>
    <message>
        <location filename="text_dict_default.json" line="126"/>
        <source>Click on the eye icon to 
display the volume rendered 
image</source>
        <extracomment>28_ArrowText_0</extracomment>
        <translation type="unfinished">点击眼睛图标以
显示体积渲染
图像</translation>
    </message>
    <message>
        <location filename="text_dict_default.json" line="130"/>
        <source>Slicer displays the 
volume rendered 
image of the left kidney </source>
        <extracomment>29_TextBox_0</extracomment>
        <translation type="unfinished">Slicer 显示了
左肾的
体积渲染
图像</translation>
    </message>
    <message>
        <location filename="text_dict_default.json" line="134"/>
        <source>Extend the ROI to generate 
a volume rendered image of 
the right kidney</source>
        <extracomment>30_TextBox_0</extracomment>
        <translation type="unfinished">将ROI范围扩展，以生成
右肾的
体积渲染图像</translation>
    </message>
    <message>
        <location filename="text_dict_default.json" line="138"/>
        <source>Click on File, then Close Scene
in the main menu</source>
        <extracomment>31_ArrowText_1</extracomment>
        <translation type="unfinished">在主菜单中，点击“文件”，然后点击“关闭场景”</translation>
    </message>
    <message>
        <location filename="text_dict_default.json" line="140"/>
        <source>Part 3: Loading and 
viewing 3D models
</source>
        <extracomment>32_TextBox_0</extracomment>
        <translation type="unfinished">第3部分：加载和
查看3D模型
</translation>
    </message>
    <message>
        <location filename="text_dict_default.json" line="144"/>
        <source>• The directory dataset2_Head contains the Slicer scene called Head_scene.mrb

• The scene contains 3D models from the SPL brain atlas developed by the department of Radiology at Brigham and Women’s Hospital, Harvard Medical School (NIH P41 RR013218, NIH R01 MH05074)</source>
        <extracomment>33_TextBox_1</extracomment>
        <translation type="unfinished">• 目录 dataset2_Head 中包含一个名为 Head_scene.mrb 的 Slicer 场景

• 该场景包含由哈佛医学院布里格姆妇女医院放射科开发的 SPL 大脑图谱中的 3D 模型（NIH P41 RR013218，NIH R01 MH05074）</translation>
    </message>
    <message>
        <location filename="text_dict_default.json" line="146"/>
        <source>Slicer Scene</source>
        <extracomment>34_TextBox_0</extracomment>
        <translation type="unfinished">切片场景</translation>
    </message>
    <message>
        <location filename="text_dict_default.json" line="148"/>
        <source>Slicer stores all loaded data in a repository called a scene


Each data set, such as an image volume, surface model, or point set, is represented as a node in a Slicer scene.


All Slicer modules operate on the data stored in a Slicer scene.</source>
        <extracomment>34_TextBox_1</extracomment>
        <translation type="unfinished">Slicer 将所有加载的数据存储在一个称为“场景”的存储库中


每个数据集（例如图像体积、曲面模型或点集）在 Slicer 场景中都以节点的形式表示。


所有 Slicer 模块都是基于存储在 Slicer 场景中的数据进行操作的。</translation>
    </message>
    <message>
        <location filename="text_dict_default.json" line="150"/>
        <source>Loading a Scene</source>
        <extracomment>35_LoadingaScene_title</extracomment>
        <translation type="unfinished">加载场景</translation>
    </message>
    <message>
        <location filename="text_dict_default.json" line="152"/>
        <source>Slicer displays a 3D 
surface model of the 
head and 2D MRI slices</source>
        <extracomment>35_TextBox_0</extracomment>
        <translation type="unfinished">Slicer 显示了
头部的 3D
表面模型和 2D MRI 切片</translation>
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
        <translation type="unfinished">查看3D模型</translation>
    </message>
    <message>
        <location filename="text_dict_default.json" line="156"/>
        <source>Position the cursor over 
the pin icon to reveal the 
slice menu and click on 
the eye icon to display the 
axial slice in the 3D viewer</source>
        <extracomment>36_ArrowText_0</extracomment>
        <translation type="unfinished">将光标悬停在
图钉图标上以显示
切片菜单，然后点击
眼睛图标，在3D查看器中显示
轴向切片</translation>
    </message>
    <message>
        <location filename="text_dict_default.json" line="160"/>
        <source>Select the Models module 
in the list of models</source>
        <extracomment>37_ArrowText_1</extracomment>
        <translation type="unfinished">在模型列表中
选择“模型”模块</translation>
    </message>
    <message>
        <location filename="text_dict_default.json" line="164"/>
        <source>Slicer displays the list of 
3D models loaded in the 
scene

Select the model Skin.vtk</source>
        <extracomment>38_ArrowText_0</extracomment>
        <translation type="unfinished">Slicer 显示了
场景中
加载的
3D 模型列表

选择模型 Skin.vtk</translation>
    </message>
    <message>
        <location filename="text_dict_default.json" line="168"/>
        <source>Lower the opacity of 
the Skin model using 
the visibility slider</source>
        <extracomment>39_ArrowText_0</extracomment>
        <translation type="unfinished">使用
可见性滑块
降低
皮肤模型的不透明度</translation>
    </message>
    <message>
        <location filename="text_dict_default.json" line="170"/>
        <source>The skull bone and 
eyeballs models appear 
through the skin</source>
        <extracomment>39_TextBox_1</extracomment>
        <translation type="unfinished">颅骨和
眼球模型透过
皮肤显现出来</translation>
    </message>
    <message>
        <location filename="text_dict_default.json" line="174"/>
        <source>Select the skull bone 
model and click on the 
eye icon to turn off its 
visibility</source>
        <extracomment>40_ArrowText_1</extracomment>
        <translation type="unfinished">选中颅骨
模型，然后点击
眼睛图标以关闭其
可见性</translation>
    </message>
    <message>
        <location filename="text_dict_default.json" line="176"/>
        <source>The white matter and 
optic nerve models 
appear through the skin</source>
        <extracomment>40_TextBox_2</extracomment>
        <translation type="unfinished">白质和
视神经模型
透过皮肤显现出来</translation>
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
        <translation type="unfinished">与3D模型进行交互</translation>
    </message>
    <message>
        <location filename="text_dict_default.json" line="180"/>
        <source>Click on the eye icon to 
display the coronal slice 
in the 3D viewer</source>
        <extracomment>41_ArrowText_0</extracomment>
        <translation type="unfinished">点击眼睛图标，
在3D查看器中
显示冠状切面</translation>
    </message>
    <message>
        <location filename="text_dict_default.json" line="184"/>
        <source>Select the hemispheric 
white matter model and 
select the option Clipping</source>
        <extracomment>42_ArrowText_2</extracomment>
        <translation type="unfinished">选择半球
白质模型，并
选中“裁剪”选项</translation>
    </message>
    <message>
        <location filename="text_dict_default.json" line="188"/>
        <source>Move the coronal slice 
posteriorily to display the 
optic chiasm</source>
        <extracomment>43_TextBox_0</extracomment>
        <translation type="unfinished">将冠状切面
向后移动，以显示
视神经交叉</translation>
    </message>
    <message>
        <location filename="text_dict_default.json" line="192"/>
        <source>Slicer displays a 3D view of 
the optic chiasm</source>
        <extracomment>44_TextBox_0</extracomment>
        <translation type="unfinished">Slicer 显示了
视神经交叉的 3D 视图</translation>
    </message>
    <message>
        <location filename="text_dict_default.json" line="194"/>
        <source>Conclusion</source>
        <extracomment>45_TextBox_0</extracomment>
        <translation type="unfinished">结论</translation>
    </message>
    <message>
        <location filename="text_dict_default.json" line="196"/>
        <source>• 3D Slicer provides advanced functionalities for loading and viewing 3D medical imaging data

• The tutorial demonstrates how to use volume rendering and 3D surface modeling for interactive visualization of CT and MRI data


Contact: spujol@bwh.harvard.edu</source>
        <extracomment>45_TextBox_1</extracomment>
        <translation type="unfinished">• 3D Slicer 提供了用于加载和查看 3D 医学影像数据的高级功能

• 本教程演示了如何利用体积渲染和 3D 表面建模技术，对 CT 和 MRI 数据进行交互式可视化


联系方式：spujol@bwh.harvard.edu</translation>
    </message>
    <message>
        <location filename="text_dict_default.json" line="198"/>
        <source>Acknowledgements</source>
        <extracomment>46_TextBox_0</extracomment>
        <translation type="unfinished">致谢</translation>
    </message>
    <message>
        <location filename="text_dict_default.json" line="200"/>
        <source>Neuroimage Analysis Center (NIBIB P41 EB015902)</source>
        <extracomment>46_TextBox_1</extracomment>
        <translation type="unfinished">神经影像分析中心（NIBIB P41 EB015902）</translation>
    </message>
</context>
</TS>

<?xml version="1.0" encoding="utf-8"?>
<!DOCTYPE TS>
<TS version="2.1" language="zh-Hans">
<context>
    <name>TutorialMaker</name>
    <message>
        <location filename="text_dict_default.json" line="8"/>
        <source>AI-based Segmentation in 3D Slicer</source>
        <extracomment>0_TextBox_0</extracomment>
        <translation>在 3D Slicer 中使用 AI 分割</translation>
    </message>
    <message>
        <location filename="text_dict_default.json" line="10"/>
        <source>Sonia Pujol, Ph. D. 
Brigham and Women&apos;s Hospital,
Harvard Medical School
Boston, MA</source>
        <extracomment>0_TextBox_1</extracomment>
        <translation>Sonia Pujol 博士
布里格姆妇女医院
哈佛医学院
美国马萨诸塞州波士顿</translation>
    </message>
    <message>
        <location filename="text_dict_default.json" line="12"/>
        <source>Slicer Ribeirão Preto Workshop
June 30, 2025</source>
        <extracomment>0_TextBox_3</extracomment>
        <translation>Slicer 里贝朗普雷图研讨班
2025 年 6 月 30 日</translation>
    </message>
    <message>
        <location filename="text_dict_default.json" line="14"/>
        <location filename="text_dict_default.json" line="18"/>
        <source>Manual vs AI-powered Segmentation</source>
        <extracomment>1_TextBox_0
----------
2_TextBox_0</extracomment>
        <translation>手工分割与 AI 分割</translation>
    </message>
    <message>
        <location filename="text_dict_default.json" line="16"/>
        <source>Medical images have traditionally been manually segmented, which is a time-consuming process that requires intensive effort by radiologists and is subject to inter-reader variability.</source>
        <extracomment>1_TextBox_1</extracomment>
        <translation>医学影像传统上由人工分割。这一过程耗时，需要放射科医师投入大量精力，结果也会因阅片者而异。</translation>
    </message>
    <message>
        <location filename="text_dict_default.json" line="20"/>
        <source>In the past decade, image segmentation has been powered by the development of deep learning algorithms (e.g. nnUnet by the German Cancer Research Center (DKFZ)/Helmholtz Research).


AI-powered segmentation tools can reduce the segmentation time and provide more reproducible results.</source>
        <extracomment>2_TextBox_1</extracomment>
        <translation>过去十年，深度学习算法推动了影像分割的发展，例如德国癌症研究中心（DKFZ）及亥姆霍兹研究机构开发的 nnU-Net。


AI 分割工具可缩短分割时间，提高结果的可重复性。</translation>
    </message>
    <message>
        <location filename="text_dict_default.json" line="22"/>
        <source>AI Terminology</source>
        <extracomment>3_TextBox_0</extracomment>
        <translation>AI 术语</translation>
    </message>
    <message>
        <location filename="text_dict_default.json" line="24"/>
        <source>A Model is an AI algorithm that was trained to perform a specific task (e.g. brain tumor segmentation model).

The Weights of an AI model are small numbers that determine how much importance the model gives to different image features.

During the Training phase, a model learns patterns from data labelled by experts and adjusts its weights to improve its predictions.

During the Validation/Test phase, the model is evaluated on a separate set of data not used during the Training phase.

During Inference, the model is applied to new datasets to perform the specific task it was trained for.</source>
        <extracomment>3_TextBox_1</extracomment>
        <translation>模型是经过训练、可执行特定任务的 AI 算法，例如脑肿瘤分割模型。

权重是模型中的数值参数，决定模型赋予不同影像特征的重要程度。

训练阶段，模型从专家标注的数据中学习规律，并调整权重以改善预测。

验证和测试阶段，使用训练时未用过的独立数据评估模型。

推理阶段，将模型应用于新数据集，执行训练所针对的任务。</translation>
    </message>
    <message>
        <location filename="text_dict_default.json" line="26"/>
        <source>3D Slicer AI Tutorial</source>
        <extracomment>4_TextBox_0</extracomment>
        <translation>3D Slicer AI 教程</translation>
    </message>
    <message>
        <location filename="text_dict_default.json" line="28"/>
        <source>This tutorial focuses on running inference tasks using various pre-trained AI models for automated segmentation of anatomical and pathological structures.</source>
        <extracomment>4_TextBox_1</extracomment>
        <translation>本教程介绍如何使用不同的预训练 AI 模型进行推理，自动分割解剖结构和病变。</translation>
    </message>
    <message>
        <location filename="text_dict_default.json" line="30"/>
        <location filename="text_dict_default.json" line="34"/>
        <source>MONAIAuto3DSeg Slicer extension</source>
        <extracomment>5_TextBox_0
----------
6_TextBox_0</extracomment>
        <translation>Slicer 扩展 MONAIAuto3DSeg</translation>
    </message>
    <message>
        <location filename="text_dict_default.json" line="32"/>
        <source>This tutorial uses the pre-trained models of the MONAIAuto3DSeg Slicer extension.


The tool is designed to work on laptops or on average desktop computer without a GPU.</source>
        <extracomment>5_TextBox_1</extracomment>
        <translation>本教程使用 Slicer 扩展 MONAIAuto3DSeg 的预训练模型。


该工具可在没有 GPU 的笔记本电脑或普通台式机上运行。</translation>
    </message>
    <message>
        <location filename="text_dict_default.json" line="36"/>
        <source>Multiple modalities Support (CT, MRI).


Multiple anatomies (head, thorax, abdomen, pelvis, etc.).


Multiple pathologies (tumor, hemorrhage, edema).</source>
        <extracomment>6_TextBox_1</extracomment>
        <translation>支持多种成像模态（CT、MRI）。


覆盖多个解剖部位（头部、胸部、腹部、盆腔等）。


支持多种病变（肿瘤、出血、水肿）。</translation>
    </message>
    <message>
        <location filename="text_dict_default.json" line="38"/>
        <source>Slicer AI Tutorial: Segmentation Tasks</source>
        <extracomment>7_TextBox_0</extracomment>
        <translation>Slicer AI 教程的分割任务</translation>
    </message>
    <message>
        <location filename="text_dict_default.json" line="40"/>
        <source>Segmentation Task #1: Prostate 


Segmentation Task #2: Brain Glioma 


Segmentation Task #3: Whole Body Segmentation</source>
        <extracomment>7_TextBox_1</extracomment>
        <translation>分割任务 1：前列腺


分割任务 2：脑胶质瘤


分割任务 3：全身分割</translation>
    </message>
    <message>
        <location filename="text_dict_default.json" line="42"/>
        <source>AI Segmentation Task #1: Prostate</source>
        <extracomment>8_TextBox_0</extracomment>
        <translation>AI 分割任务 1：前列腺</translation>
    </message>
    <message>
        <location filename="text_dict_default.json" line="44"/>
        <source>AI-based Segmentation of Peripheral Zone (PZ) and Transition Zone (TZ) of the prostate on T2-weighted MRI Images.


Dataset:
msd_prostate_01-t2
msd_prostate_01-adc</source>
        <extracomment>9_TextBox_1</extracomment>
        <translation>在 T2 加权 MRI 图像上使用 AI 分割前列腺外周带（PZ）和移行带（TZ）。


数据集：
msd_prostate_01-t2
msd_prostate_01-adc</translation>
    </message>
    <message>
        <location filename="text_dict_default.json" line="46"/>
        <source>Click on Add Data in the Welcome to Slicer module

Click on Choose Directory to Add and browse to the location of the Slicer datasets

Select the dataset3_ProstateMRI and click on Open</source>
        <extracomment>10_TextBox_1</extracomment>
        <translation>在「欢迎使用 Slicer」模块中点击「添加数据」。

点击「选择要添加的目录」，找到 Slicer 示例数据所在目录。

选中 dataset3_ProstateMRI，然后点击「打开」</translation>
    </message>
    <message>
        <location filename="text_dict_default.json" line="48"/>
        <source>Slicer loads the prostate MRI dataset</source>
        <extracomment>11_TextBox_0</extracomment>
        <translation>Slicer 加载前列腺 MRI 数据集</translation>
    </message>
    <message>
        <location filename="text_dict_default.json" line="50"/>
        <source>Click on Welcome to Slicer in the Modules&apos; menu and browse to the category Segmentation

Select the MONAIAuto3DSeg module</source>
        <extracomment>12_TextBox_0</extracomment>
        <translation>打开当前显示「欢迎使用 Slicer」的模块下拉菜单，进入「分割」分类。

选择 MONAIAuto3DSeg 模块</translation>
    </message>
    <message>
        <location filename="text_dict_default.json" line="52"/>
        <source>Enter the model&apos;s name Prostate in the Segmentation model menu</source>
        <extracomment>13_TextBox_0</extracomment>
        <translation>在「分割模型」菜单中输入模型名称 Prostate</translation>
    </message>
    <message>
        <location filename="text_dict_default.json" line="54"/>
        <source>Select the model Prostate - Multisequence</source>
        <extracomment>13_TextBox_1</extracomment>
        <translation>选择 Prostate - Multisequence（前列腺多序列）模型</translation>
    </message>
    <message>
        <location filename="text_dict_default.json" line="56"/>
        <source>Enter the Input T2 volume msd-prostate-01-t2 and the Input ADC volume msd-prostate-01-adc</source>
        <extracomment>14_TextBox_0</extracomment>
        <translation>在 T2 输入中选择体数据 msd-prostate-01-t2，在 ADC 输入中选择体数据 msd-prostate-01-adc</translation>
    </message>
    <message>
        <location filename="text_dict_default.json" line="58"/>
        <source>Click on Create new segmentation on Apply</source>
        <extracomment>14_TextBox_1</extracomment>
        <translation>选择「应用时创建新分割」</translation>
    </message>
    <message>
        <location filename="text_dict_default.json" line="60"/>
        <source>Slicer starts the inference</source>
        <extracomment>15_TextBox_0</extracomment>
        <translation>Slicer 开始推理</translation>
    </message>
    <message>
        <location filename="text_dict_default.json" line="62"/>
        <source>Slicer shows the results of the AI-based prostate segmentation</source>
        <extracomment>16_TextBox_0</extracomment>
        <translation>Slicer 显示 AI 前列腺分割结果</translation>
    </message>
    <message>
        <location filename="text_dict_default.json" line="64"/>
        <source>AI Segmentation Task #2: Brain Glioma</source>
        <extracomment>17_TextBox_0</extracomment>
        <translation>AI 分割任务 2：脑胶质瘤</translation>
    </message>
    <message>
        <location filename="text_dict_default.json" line="66"/>
        <source>AI-based Segmentation of Neoplasm, Necrosis and Edema in Brain MRI images.


Datasets:
1) BraTS-GLI_00005-000-t1n (T1-weighted)
2) BraTS-GLI_00005-000-t1c (T1-weighted post-Gd)
3) BraTS-GLI_00005-000-t2w (T2-weighted)
4) BraTS-GLI_00005-000-t2f (T2-FLAIR )</source>
        <extracomment>18_TextBox_1</extracomment>
        <translation>使用 AI 在脑部 MRI 图像中分割肿瘤、坏死和水肿区域。


数据集：
1）BraTS-GLI_00005-000-t1n（T1 加权）
2）BraTS-GLI_00005-000-t1c（钆增强后 T1 加权）
3）BraTS-GLI_00005-000-t2w（T2 加权）
4）BraTS-GLI_00005-000-t2f（T2-FLAIR）</translation>
    </message>
    <message>
        <location filename="text_dict_default.json" line="68"/>
        <source>Click on Add Data in the Welcome to Slicer module

Click on Choose File(s) to Add and browse to the location of the Slicer datasets

In the subdirectory dataset4_BrainMRI_Glioma, select the four datasets BraTS-GLI-00006-t1c.nii.gz, BraTS-GLI-00006-t1n.nii.gz, BraTS-GLI-00006-t2f.nii.gz, BraTS-GLI-00006-t2w.nii.gz

Click on Open</source>
        <extracomment>19_TextBox_1</extracomment>
        <translation>在「欢迎使用 Slicer」模块中点击「添加数据」。

点击「选择要添加的文件」，找到 Slicer 示例数据所在目录。

在子目录 dataset4_BrainMRI_Glioma 中选择四个文件：BraTS-GLI-00006-000-t1c.nii.gz、BraTS-GLI-00006-000-t1n.nii.gz、BraTS-GLI-00006-000-t2f.nii.gz、BraTS-GLI-00006-000-t2w.nii.gz。

点击「打开」</translation>
    </message>
    <message>
        <location filename="text_dict_default.json" line="70"/>
        <source>Select the module MONAIAuto3DSeg and enter the model&apos;s name Brain Tumor Segmentation in the Segmentation model menu</source>
        <extracomment>20_TextBox_0</extracomment>
        <translation>选择 MONAIAuto3DSeg 模块，在「分割模型」菜单中输入 Brain Tumor Segmentation</translation>
    </message>
    <message>
        <location filename="text_dict_default.json" line="72"/>
        <source>Select the model Brain Tumor Segmentation (BRATS) GLI</source>
        <extracomment>20_TextBox_1</extracomment>
        <translation>选择 Brain Tumor Segmentation (BRATS) GLI（脑胶质瘤分割）模型</translation>
    </message>
    <message>
        <location filename="text_dict_default.json" line="74"/>
        <source>Enter the input volumes as follows:

Input T2F volume: BraTS-GLI_00005-000-t2f
Input T1C volume: BraTS-GLI_00005-000-t1c
Input T1N volume: BraTS-GLI_00005-000-t1n
Input T2W volume: BraTS-GLI_00005-000-t2w


Click on Create new Segmentation on Apply

Click on Apply to start the segmentation</source>
        <extracomment>21_TextBox_0</extracomment>
        <translation>按以下对应关系选择输入体数据：

T2-FLAIR（T2F）：BraTS-GLI-00006-000-t2f
增强 T1（T1C）：BraTS-GLI-00006-000-t1c
平扫 T1（T1N）：BraTS-GLI-00006-000-t1n
T2 加权（T2W）：BraTS-GLI-00006-000-t2w


选择「应用时创建新分割」。

点击「应用」开始分割</translation>
    </message>
    <message>
        <location filename="text_dict_default.json" line="76"/>
        <source>Slicer starts running the inference task

Once the segmentation is done, &apos;Processing finished&apos; appears in the Slicer GUI</source>
        <extracomment>22_TextBox_1</extracomment>
        <translation>Slicer 开始执行推理任务。

分割结束后，在 Slicer 界面查看「处理完成」提示</translation>
    </message>
    <message>
        <location filename="text_dict_default.json" line="78"/>
        <source>Click on Show 3D to display the 3D segments in the 3D Viewer</source>
        <extracomment>23_TextBox_1</extracomment>
        <translation>点击「显示 3D」，在三维视图中显示分割结果</translation>
    </message>
    <message>
        <location filename="text_dict_default.json" line="80"/>
        <source>AI Segmentation Task #3: Whole Body Segmentation</source>
        <extracomment>24_TextBox_0</extracomment>
        <translation>AI 分割任务 3：全身分割</translation>
    </message>
    <message>
        <location filename="text_dict_default.json" line="82"/>
        <source>AI-based Segmentation of the whole body.


Dataset:
CT_ThoraxAbdomen</source>
        <extracomment>25_TextBox_1</extracomment>
        <translation>使用 AI 进行全身分割。


数据集：
CT_ThoraxAbdomen</translation>
    </message>
    <message>
        <location filename="text_dict_default.json" line="84"/>
        <source>In the Add DICOM Data module, select the Patient patient1 and double click onthe image CT_Thorax_Abdomen to load it in Slicer</source>
        <extracomment>26_TextBox_0</extracomment>
        <translation>在「添加 DICOM 数据」模块中选中 patient1，双击 CT_Thorax_Abdomen，将影像加载到 Slicer</translation>
    </message>
    <message>
        <location filename="text_dict_default.json" line="86"/>
        <source>Select the module MONAIAuto3DSeg and enter the model&apos;s name Whole Body Segmentation in the Segmentation model menu</source>
        <extracomment>27_TextBox_0</extracomment>
        <translation>选择 MONAIAuto3DSeg 模块，在「分割模型」菜单中输入 Whole Body Segmentation</translation>
    </message>
    <message>
        <location filename="text_dict_default.json" line="88"/>
        <source>Select the model Whole Body Segmentation TS1-quick</source>
        <extracomment>27_TextBox_1</extracomment>
        <translation>选择 Whole Body Segmentation TS1-quick（全身快速分割）模型</translation>
    </message>
    <message>
        <location filename="text_dict_default.json" line="90"/>
        <source>Select the input Volume 6:CT_Thorax_Abdomen,

Click on Create new Segmentation on Apply

Click on Apply to start the segmentation</source>
        <extracomment>28_TextBox_0</extracomment>
        <translation>将 6:CT_Thorax_Abdomen 设为输入体数据。

选择「应用时创建新分割」。

点击「应用」开始分割</translation>
    </message>
    <message>
        <location filename="text_dict_default.json" line="92"/>
        <source>Slicer displays the results of the AI-based segmentation using the Whole Body Segmentation TS1-quick</source>
        <extracomment>29_TextBox_0</extracomment>
        <translation>Slicer 显示 Whole Body Segmentation TS1-quick 模型生成的全身分割结果</translation>
    </message>
    <message>
        <location filename="text_dict_default.json" line="94"/>
        <source>Conclusion</source>
        <extracomment>30_TextBox_0</extracomment>
        <translation>结论</translation>
    </message>
    <message>
        <location filename="text_dict_default.json" line="96"/>
        <source>The 3D Slicer MONAIAuto3DSeg extension provides fast AI-based segmentation of anatomical and pathological structures.


The module can run on standard laptop and desktop computers with no GPU.</source>
        <extracomment>30_TextBox_1</extracomment>
        <translation>3D Slicer 的 MONAIAuto3DSeg 扩展可使用 AI 快速分割解剖结构和病变。


此模块可以在没有 GPU 的普通笔记本电脑和台式机上运行。</translation>
    </message>
    <message>
        <location filename="text_dict_default.json" line="98"/>
        <source>Acknowledgements</source>
        <extracomment>31_TextBox_0</extracomment>
        <translation>致谢</translation>
    </message>
    <message>
        <location filename="text_dict_default.json" line="100"/>
        <source>The 3D Slicer internationalization project and the 3D Slicer for Latin America project have been made possible through funding by the Chan Zuckerberg Initiative.</source>
        <extracomment>31_TextBox_1</extracomment>
        <translation>3D Slicer 国际化项目和 3D Slicer 拉丁美洲项目均获得陈－扎克伯格倡议（Chan Zuckerberg Initiative）的资助。</translation>
    </message>
</context>
</TS>

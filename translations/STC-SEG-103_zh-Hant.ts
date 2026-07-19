<?xml version="1.0" encoding="utf-8"?>
<!DOCTYPE TS>
<TS version="2.1" language="zh-Hant">
<context>
    <name>TutorialMaker</name>
    <message>
        <location filename="text_dict_default.json" line="8"/>
        <source>AI-based Segmentation in 3D Slicer</source>
        <extracomment>0_TextBox_0</extracomment>
        <translation>3D Slicer 的 AI 分割</translation>
    </message>
    <message>
        <location filename="text_dict_default.json" line="10"/>
        <source>Sonia Pujol, Ph. D. 
Brigham and Women&apos;s Hospital,
Harvard Medical School
Boston, MA</source>
        <extracomment>0_TextBox_1</extracomment>
        <translation>Sonia Pujol 博士
布萊根婦女醫院
哈佛醫學院
美國麻薩諸塞州波士頓</translation>
    </message>
    <message>
        <location filename="text_dict_default.json" line="12"/>
        <source>Slicer Ribeirão Preto Workshop
June 30, 2025</source>
        <extracomment>0_TextBox_3</extracomment>
        <translation>Slicer Ribeirão Preto 工作坊
2025 年 6 月 30 日</translation>
    </message>
    <message>
        <location filename="text_dict_default.json" line="14"/>
        <location filename="text_dict_default.json" line="18"/>
        <source>Manual vs AI-powered Segmentation</source>
        <extracomment>1_TextBox_0
----------
2_TextBox_0</extracomment>
        <translation>手動分割與 AI 分割</translation>
    </message>
    <message>
        <location filename="text_dict_default.json" line="16"/>
        <source>Medical images have traditionally been manually segmented, which is a time-consuming process that requires intensive effort by radiologists and is subject to inter-reader variability.</source>
        <extracomment>1_TextBox_1</extracomment>
        <translation>傳統上，醫學影像採用手動分割。這項流程相當耗時，需要放射科醫師投入大量精力，且會受到判讀者間變異影響。</translation>
    </message>
    <message>
        <location filename="text_dict_default.json" line="20"/>
        <source>In the past decade, image segmentation has been powered by the development of deep learning algorithms (e.g. nnUnet by the German Cancer Research Center (DKFZ)/Helmholtz Research).


AI-powered segmentation tools can reduce the segmentation time and provide more reproducible results.</source>
        <extracomment>2_TextBox_1</extracomment>
        <translation>過去十年間，影像分割因深度學習演算法的發展而快速進步 (例如德國癌症研究中心 (DKFZ)／Helmholtz Research 開發的 nnUnet)。


AI 分割工具可縮短分割時間，並提供更具再現性的結果。</translation>
    </message>
    <message>
        <location filename="text_dict_default.json" line="22"/>
        <source>AI Terminology</source>
        <extracomment>3_TextBox_0</extracomment>
        <translation>AI 術語</translation>
    </message>
    <message>
        <location filename="text_dict_default.json" line="24"/>
        <source>A Model is an AI algorithm that was trained to perform a specific task (e.g. brain tumor segmentation model).

The Weights of an AI model are small numbers that determine how much importance the model gives to different image features.

During the Training phase, a model learns patterns from data labelled by experts and adjusts its weights to improve its predictions.

During the Validation/Test phase, the model is evaluated on a separate set of data not used during the Training phase.

During Inference, the model is applied to new datasets to perform the specific task it was trained for.</source>
        <extracomment>3_TextBox_1</extracomment>
        <translation>模型 (Model) 是經過訓練、可執行特定工作 (例如腦腫瘤分割) 的 AI 演算法。

AI 模型的權重 (Weights) 是一些較小的數值，用來決定模型賦予不同影像特徵的重要程度。

在訓練 (Training) 階段，模型會從專家標註的資料中學習模式，並調整權重以改善預測結果。

在驗證／測試 (Validation/Test) 階段，會使用未用於訓練的另一組資料評估模型。

在推論 (Inference) 階段，模型會套用於新的資料集，以執行受訓的特定工作。</translation>
    </message>
    <message>
        <location filename="text_dict_default.json" line="26"/>
        <source>3D Slicer AI Tutorial</source>
        <extracomment>4_TextBox_0</extracomment>
        <translation>3D Slicer AI 教學</translation>
    </message>
    <message>
        <location filename="text_dict_default.json" line="28"/>
        <source>This tutorial focuses on running inference tasks using various pre-trained AI models for automated segmentation of anatomical and pathological structures.</source>
        <extracomment>4_TextBox_1</extracomment>
        <translation>本教學著重於使用各種預先訓練的 AI 模型執行推論工作，以自動分割解剖與病理結構。</translation>
    </message>
    <message>
        <location filename="text_dict_default.json" line="30"/>
        <location filename="text_dict_default.json" line="34"/>
        <source>MONAIAuto3DSeg Slicer extension</source>
        <extracomment>5_TextBox_0
----------
6_TextBox_0</extracomment>
        <translation>MONAIAuto3DSeg Slicer 擴充功能</translation>
    </message>
    <message>
        <location filename="text_dict_default.json" line="32"/>
        <source>This tutorial uses the pre-trained models of the MONAIAuto3DSeg Slicer extension.


The tool is designed to work on laptops or on average desktop computer without a GPU.</source>
        <extracomment>5_TextBox_1</extracomment>
        <translation>本教學使用 MONAIAuto3DSeg Slicer 擴充功能的預先訓練模型。


此工具可在沒有 GPU 的筆記型電腦或一般桌上型電腦上運作。</translation>
    </message>
    <message>
        <location filename="text_dict_default.json" line="36"/>
        <source>Multiple modalities Support (CT, MRI).


Multiple anatomies (head, thorax, abdomen, pelvis, etc.).


Multiple pathologies (tumor, hemorrhage, edema).</source>
        <extracomment>6_TextBox_1</extracomment>
        <translation>支援多種影像模態 (CT、MRI)。


支援多種解剖部位 (頭部、胸部、腹部、骨盆等)。


支援多種病理狀況 (腫瘤、出血、水腫)。</translation>
    </message>
    <message>
        <location filename="text_dict_default.json" line="38"/>
        <source>Slicer AI Tutorial: Segmentation Tasks</source>
        <extracomment>7_TextBox_0</extracomment>
        <translation>Slicer AI 教學：分割工作</translation>
    </message>
    <message>
        <location filename="text_dict_default.json" line="40"/>
        <source>Segmentation Task #1: Prostate 


Segmentation Task #2: Brain Glioma 


Segmentation Task #3: Whole Body Segmentation</source>
        <extracomment>7_TextBox_1</extracomment>
        <translation>分割工作 #1：前列腺


分割工作 #2：腦膠質瘤


分割工作 #3：全身分割</translation>
    </message>
    <message>
        <location filename="text_dict_default.json" line="42"/>
        <source>AI Segmentation Task #1: Prostate</source>
        <extracomment>8_TextBox_0</extracomment>
        <translation>AI 分割工作 #1：前列腺</translation>
    </message>
    <message>
        <location filename="text_dict_default.json" line="44"/>
        <source>AI-based Segmentation of Peripheral Zone (PZ) and Transition Zone (TZ) of the prostate on T2-weighted MRI Images.


Dataset:
msd_prostate_01-t2
msd_prostate_01-adc</source>
        <extracomment>9_TextBox_1</extracomment>
        <translation>在 T2 加權 MRI 影像上，以 AI 分割前列腺的周邊區 (PZ) 與移行區 (TZ)。


資料集：
msd_prostate_01-t2
msd_prostate_01-adc</translation>
    </message>
    <message>
        <location filename="text_dict_default.json" line="46"/>
        <source>Click on Add Data in the Welcome to Slicer module

Click on Choose Directory to Add and browse to the location of the Slicer datasets

Select the dataset3_ProstateMRI and click on Open</source>
        <extracomment>10_TextBox_1</extracomment>
        <translation>在「歡迎使用 Slicer」模組中點選「新增資料」

點選「選擇要加入的目錄」，並瀏覽至 Slicer 資料集所在位置

選取 dataset3_ProstateMRI，然後點選「開啟」</translation>
    </message>
    <message>
        <location filename="text_dict_default.json" line="48"/>
        <source>Slicer loads the prostate MRI dataset</source>
        <extracomment>11_TextBox_0</extracomment>
        <translation>Slicer 載入前列腺 MRI 資料集</translation>
    </message>
    <message>
        <location filename="text_dict_default.json" line="50"/>
        <source>Click on Welcome to Slicer in the Modules&apos; menu and browse to the category Segmentation

Select the MONAIAuto3DSeg module</source>
        <extracomment>12_TextBox_0</extracomment>
        <translation>在模組選單中點選「歡迎使用 Slicer」，然後瀏覽至「分割」類別

選取 MONAIAuto3DSeg 模組</translation>
    </message>
    <message>
        <location filename="text_dict_default.json" line="52"/>
        <source>Enter the model&apos;s name Prostate in the Segmentation model menu</source>
        <extracomment>13_TextBox_0</extracomment>
        <translation>在「分割模型」選單中輸入模型名稱 Prostate</translation>
    </message>
    <message>
        <location filename="text_dict_default.json" line="54"/>
        <source>Select the model Prostate - Multisequence</source>
        <extracomment>13_TextBox_1</extracomment>
        <translation>選取 Prostate - Multisequence 模型</translation>
    </message>
    <message>
        <location filename="text_dict_default.json" line="56"/>
        <source>Enter the Input T2 volume msd-prostate-01-t2 and the Input ADC volume msd-prostate-01-adc</source>
        <extracomment>14_TextBox_0</extracomment>
        <translation>輸入 T2 影像體積 msd-prostate-01-t2 與 ADC 影像體積 msd-prostate-01-adc</translation>
    </message>
    <message>
        <location filename="text_dict_default.json" line="58"/>
        <source>Click on Create new segmentation on Apply</source>
        <extracomment>14_TextBox_1</extracomment>
        <translation>點選「按一下套用時建立新的分割」</translation>
    </message>
    <message>
        <location filename="text_dict_default.json" line="60"/>
        <source>Slicer starts the inference</source>
        <extracomment>15_TextBox_0</extracomment>
        <translation>Slicer 開始執行推論</translation>
    </message>
    <message>
        <location filename="text_dict_default.json" line="62"/>
        <source>Slicer shows the results of the AI-based prostate segmentation</source>
        <extracomment>16_TextBox_0</extracomment>
        <translation>Slicer 顯示 AI 前列腺分割結果</translation>
    </message>
    <message>
        <location filename="text_dict_default.json" line="64"/>
        <source>AI Segmentation Task #2: Brain Glioma</source>
        <extracomment>17_TextBox_0</extracomment>
        <translation>AI 分割工作 #2：腦膠質瘤</translation>
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
        <translation>在腦部 MRI 影像上，以 AI 分割腫瘤、壞死與水腫。


資料集：
1) BraTS-GLI_00005-000-t1n (T1 加權)
2) BraTS-GLI_00005-000-t1c (T1 加權，注射 Gd 後)
3) BraTS-GLI_00005-000-t2w (T2 加權)
4) BraTS-GLI_00005-000-t2f (T2-FLAIR)</translation>
    </message>
    <message>
        <location filename="text_dict_default.json" line="68"/>
        <source>Click on Add Data in the Welcome to Slicer module

Click on Choose File(s) to Add and browse to the location of the Slicer datasets

In the subdirectory dataset4_BrainMRI_Glioma, select the four datasets BraTS-GLI-00006-t1c.nii.gz, BraTS-GLI-00006-t1n.nii.gz, BraTS-GLI-00006-t2f.nii.gz, BraTS-GLI-00006-t2w.nii.gz

Click on Open</source>
        <extracomment>19_TextBox_1</extracomment>
        <translation>在「歡迎使用 Slicer」模組中點選「新增資料」

點選「選擇要加入的檔案」，並瀏覽至 Slicer 資料集所在位置

在 dataset4_BrainMRI_Glioma 子目錄中，選取四個資料集 BraTS-GLI-00006-t1c.nii.gz、BraTS-GLI-00006-t1n.nii.gz、BraTS-GLI-00006-t2f.nii.gz、BraTS-GLI-00006-t2w.nii.gz

點選「開啟」</translation>
    </message>
    <message>
        <location filename="text_dict_default.json" line="70"/>
        <source>Select the module MONAIAuto3DSeg and enter the model&apos;s name Brain Tumor Segmentation in the Segmentation model menu</source>
        <extracomment>20_TextBox_0</extracomment>
        <translation>選取 MONAIAuto3DSeg 模組，並在「分割模型」選單中輸入模型名稱 Brain Tumor Segmentation</translation>
    </message>
    <message>
        <location filename="text_dict_default.json" line="72"/>
        <source>Select the model Brain Tumor Segmentation (BRATS) GLI</source>
        <extracomment>20_TextBox_1</extracomment>
        <translation>選取 Brain Tumor Segmentation (BRATS) GLI 模型</translation>
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
        <translation>依下列方式輸入影像體積：

輸入 T2F 影像體積：BraTS-GLI_00005-000-t2f
輸入 T1C 影像體積：BraTS-GLI_00005-000-t1c
輸入 T1N 影像體積：BraTS-GLI_00005-000-t1n
輸入 T2W 影像體積：BraTS-GLI_00005-000-t2w


點選「按一下套用時建立新的分割」

點選「套用」以開始分割</translation>
    </message>
    <message>
        <location filename="text_dict_default.json" line="76"/>
        <source>Slicer starts running the inference task

Once the segmentation is done, &apos;Processing finished&apos; appears in the Slicer GUI</source>
        <extracomment>22_TextBox_1</extracomment>
        <translation>Slicer 開始執行推論工作

分割完成後，Slicer 圖形使用者介面會顯示「處理完成」</translation>
    </message>
    <message>
        <location filename="text_dict_default.json" line="78"/>
        <source>Click on Show 3D to display the 3D segments in the 3D Viewer</source>
        <extracomment>23_TextBox_1</extracomment>
        <translation>點選「顯示 3D」，以在 3D 檢視器中顯示 3D 分割區段</translation>
    </message>
    <message>
        <location filename="text_dict_default.json" line="80"/>
        <source>AI Segmentation Task #3: Whole Body Segmentation</source>
        <extracomment>24_TextBox_0</extracomment>
        <translation>AI 分割工作 #3：全身分割</translation>
    </message>
    <message>
        <location filename="text_dict_default.json" line="82"/>
        <source>AI-based Segmentation of the whole body.


Dataset:
CT_ThoraxAbdomen</source>
        <extracomment>25_TextBox_1</extracomment>
        <translation>以 AI 分割全身。


資料集：
CT_ThoraxAbdomen</translation>
    </message>
    <message>
        <location filename="text_dict_default.json" line="84"/>
        <source>In the Add DICOM Data module, select the Patient patient1 and double click onthe image CT_Thorax_Abdomen to load it in Slicer</source>
        <extracomment>26_TextBox_0</extracomment>
        <translation>在「新增 DICOM 資料」模組中選取病患 patient1，然後按兩下影像 CT_Thorax_Abdomen，將其載入 Slicer</translation>
    </message>
    <message>
        <location filename="text_dict_default.json" line="86"/>
        <source>Select the module MONAIAuto3DSeg and enter the model&apos;s name Whole Body Segmentation in the Segmentation model menu</source>
        <extracomment>27_TextBox_0</extracomment>
        <translation>選取 MONAIAuto3DSeg 模組，並在「分割模型」選單中輸入模型名稱 Whole Body Segmentation</translation>
    </message>
    <message>
        <location filename="text_dict_default.json" line="88"/>
        <source>Select the model Whole Body Segmentation TS1-quick</source>
        <extracomment>27_TextBox_1</extracomment>
        <translation>選取 Whole Body Segmentation TS1-quick 模型</translation>
    </message>
    <message>
        <location filename="text_dict_default.json" line="90"/>
        <source>Select the input Volume 6:CT_Thorax_Abdomen,

Click on Create new Segmentation on Apply

Click on Apply to start the segmentation</source>
        <extracomment>28_TextBox_0</extracomment>
        <translation>選取輸入影像體積 6:CT_Thorax_Abdomen，

點選「按一下套用時建立新的分割」

點選「套用」以開始分割</translation>
    </message>
    <message>
        <location filename="text_dict_default.json" line="92"/>
        <source>Slicer displays the results of the AI-based segmentation using the Whole Body Segmentation TS1-quick</source>
        <extracomment>29_TextBox_0</extracomment>
        <translation>Slicer 顯示使用 Whole Body Segmentation TS1-quick 進行 AI 分割的結果</translation>
    </message>
    <message>
        <location filename="text_dict_default.json" line="94"/>
        <source>Conclusion</source>
        <extracomment>30_TextBox_0</extracomment>
        <translation>結論</translation>
    </message>
    <message>
        <location filename="text_dict_default.json" line="96"/>
        <source>The 3D Slicer MONAIAuto3DSeg extension provides fast AI-based segmentation of anatomical and pathological structures.


The module can run on standard laptop and desktop computers with no GPU.</source>
        <extracomment>30_TextBox_1</extracomment>
        <translation>3D Slicer MONAIAuto3DSeg 擴充功能可快速以 AI 分割解剖與病理結構。


此模組不需 GPU，即可在一般筆記型與桌上型電腦上執行。</translation>
    </message>
    <message>
        <location filename="text_dict_default.json" line="98"/>
        <source>Acknowledgements</source>
        <extracomment>31_TextBox_0</extracomment>
        <translation>致謝</translation>
    </message>
    <message>
        <location filename="text_dict_default.json" line="100"/>
        <source>The 3D Slicer internationalization project and the 3D Slicer for Latin America project have been made possible through funding by the Chan Zuckerberg Initiative.</source>
        <extracomment>31_TextBox_1</extracomment>
        <translation>3D Slicer 國際化專案與 3D Slicer 拉丁美洲專案得以實現，有賴 Chan Zuckerberg Initiative 資助。</translation>
    </message>
</context>
</TS>

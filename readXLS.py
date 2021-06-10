# from openpyxl import Workbook, load_workbook
import pandas as pd

basedir = "/home/orin/Learning/Data"
dFilename = "2020年10月潜客数据.xlsx"
cFilename = "车型代码20201111_F.xlsx"
# databook = load_workbook("%s/%s" % (basedir, dFilename))
# confbook = load_workbook("%s/%s" % (basedir, cFilename))
databook = pd.read_excel("%s/%s" % (basedir, dFilename), sheet_name=0, header=1)


# def excel2pandas(wb, colrange):
    # print(wb.sheetnames)


print(databook.head())
